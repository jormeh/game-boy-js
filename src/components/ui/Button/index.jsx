import { useState } from 'react';
import '@components/ui/Button/Button.css';
import '/src/index.css';

// A reusable Button component
export default function Button({
  size,
  x,
  y,
  children,
  isToggle = false,
  onPressStart = () => {},
  onPressEnd = () => {},
}) {
  // Track whether the button is currently being pressed
  const [isPressed, setIsPressed] = useState(false);

  // Set pressed state to true when interaction starts
  const handlePressStart = () => {
    setIsPressed(true);
    onPressStart();
  };

  // Reset state when interaction ends and check for toggle
  const handlePressEnd = () => {
    setIsPressed(false);
    if (!isToggle) onPressEnd();
  };

  // Apply a '--pressed' modifier class if the button is pressed
  const changeStyle = (className) =>
    isPressed ? `${className} ${className}--pressed` : className;

  return (
    <button
      className="button"
      style={{ width: size, left: x, top: y }}
      onPointerDown={handlePressStart}
      onPointerUp={handlePressEnd}
      onPointerLeave={handlePressEnd}
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
