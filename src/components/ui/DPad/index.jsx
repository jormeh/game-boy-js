import { useState } from 'react';
import '@components/ui/DPad/DPad.css';
import '/src/index.css';

// Helper function to dynamically add a modifier class
// based on which D-pad direction is currently pressed.
const changeStyle = (className, buttonState) => {
  const inputs = ['up', 'left', 'right', 'down'];
  const active = inputs.find((input) => buttonState[input]);

  if (!active) return className;
  return `${className} ${className}--${active}-pressed`;
};

export default function DPad({ size, x, y, handlers }) {
  // State to track which directional buttons are pressed
  const [isPressed, setIsPressed] = useState({
    up: false,
    left: false,
    right: false,
    down: false,
  });

  // Factory to create press start handler for a given input
  const handlePressStart = (input) => () => {
    setIsPressed((prev) => ({ ...prev, [input]: true }));
    handlers[input].start();
  };

  // Factory to create press end handler for a given input
  const handlePressEnd = (input) => () => {
    setIsPressed((prev) => ({ ...prev, [input]: false }));
    handlers[input].end();
  };

  // Creates all relevant press handlers for mouse and touch events
  const createPressHandlers = (input) => ({
    onMouseDown: handlePressStart(input),
    onMouseUp: handlePressEnd(input),
    onMouseLeave: handlePressEnd(input),
    onTouchStart: handlePressStart(input),
    onTouchEnd: handlePressEnd(input),
    onTouchCancel: handlePressEnd(input),
  });

  return (
    <div className="dpad" style={{ width: size, left: x, top: y }}>
      {/* Shadow layer for visual depth */}
      <DPadLayer
        blockClassName={'dpad__shadow'}
        elementClassName={'dpad__shadow-offset'}
        buttonState={isPressed}
      />
      {/* Light layer for visual highlights */}
      <DPadLayer
        blockClassName={'dpad__light'}
        elementClassName={'dpad__light-offset'}
        buttonState={isPressed}
      />
      {/* Interactive button surface */}
      <DPadLayer
        blockClassName={'dpad__surface'}
        elementClassName={'dpad__button'}
        buttonState={isPressed}
        isInteractive
        createPressHandlers={createPressHandlers}
      />
    </div>
  );
}

// Reusable component to render each layer of the D-pad
function DPadLayer({
  blockClassName,
  elementClassName,
  buttonState,
  isInteractive = false,
  createPressHandlers = () => ({}),
}) {
  const inputs = ['up', 'left', 'center', 'right', 'down'];

  return (
    <div className={changeStyle(blockClassName, buttonState)}>
      {inputs.map((dir) => {
        // Use <button> elements for interactive surface; otherwise, use <div>
        const Tag = isInteractive ? 'button' : 'div';

        // Only directional buttons (not center) get handlers
        const props =
          isInteractive && dir !== 'center' ? createPressHandlers(dir) : {};

        return (
          <Tag
            key={dir}
            className={`${elementClassName} ${elementClassName}--${dir}`}
            {...props}
          />
        );
      })}
    </div>
  );
}
