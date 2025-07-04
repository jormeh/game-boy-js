import { useState } from "react";
import "../styles/Button.css";
import "../styles/index.css";

// A reusable Button component with optional label, icon, and size
export default function Button({ label = "", icon: Icon, size = "medium" }) {
    // Track whether the button is currently being pressed
    const [isPressed, setIsPressed] = useState(false);

    // Set pressed state to true when interaction starts
    const handlePressStart = () => setIsPressed(true);

    // Reset pressed state when interaction ends
    const handlePressEnd = () => setIsPressed(false);

    // Apply a '--pressed' modifier class if the button is pressed
    const changeStyle = className =>
        isPressed ? `${className} ${className}--pressed` : className;

    return (
        <button
            className={`button button--${size}`} // Base and size modifier class
            onMouseDown={handlePressStart}
            onMouseUp={handlePressEnd}
            onMouseLeave={handlePressEnd}
            onTouchStart={handlePressStart}
            onTouchEnd={handlePressEnd}
            onTouchCancel={handlePressEnd}
        >
            {/* Decorative light layer with pressed state styling */}
            <div className={changeStyle("button__light")}></div>

            {/* Decorative shadow layer (static) */}
            <div className="button__shadow"></div>

            {/* Main surface of the button with pressed state styling */}
            <div className={changeStyle("button__surface")}></div>

            {/* Optional label (only rendered if provided) */}
            {label && (
                <p className={changeStyle("button__label")}>{label}</p>
            )}

            {/* Optional icon (only rendered if provided) */}
            {Icon && (
                <Icon className={changeStyle("button__icon")} />
            )}
        </button>
    );
}
