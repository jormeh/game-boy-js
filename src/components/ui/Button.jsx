import { useState } from 'react';
import '@styles/ui/Button.css';
import '@styles/index.css';

// A reusable Button component
export default function Button({ size, x, y, children, onPress = () => {} }) {
  // Track whether the button is currently being pressed
  const [isPressed, setIsPressed] = useState(false);

  // Set pressed state to true when interaction starts
  const handlePressStart = () => {
    setIsPressed(true);
    onPress();
  };

  // Reset pressed state when interaction ends
  const handlePressEnd = () => setIsPressed(false);

  // Apply a '--pressed' modifier class if the button is pressed
  const changeStyle = (className) =>
    isPressed ? `${className} ${className}--pressed` : className;

  return (
    <button
      className="button"
      style={{ width: size, left: x, top: y }}
      onMouseDown={handlePressStart}
      onMouseUp={handlePressEnd}
      onMouseLeave={handlePressEnd}
      onTouchStart={handlePressStart}
      onTouchEnd={handlePressEnd}
      onTouchCancel={handlePressEnd}
    >
      {/* Decorative light layer with pressed state styling */}
      <div className={changeStyle('button__light')}></div>

      {/* Decorative shadow layer (static) */}
      <div className="button__shadow"></div>

      {/* Main surface of the button with pressed state styling */}
      <div className={changeStyle('button__surface')}>{children}</div>
    </button>
  );
}
