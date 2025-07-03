import { useState } from "react"
import "../styles/Button.css"
import "../styles/index.css";

export default function Button({label="", icon: Icon, size="medium"}) {
    const [isPressed, setIsPressed] = useState(false);
    
    const handlePressStart = () => setIsPressed(true);
    const handlePressEnd = () => setIsPressed(false);
    
    const changeStyle = className => isPressed ? `${className} ${className}--pressed` : className;

    return (
        <button
            className={`button button--${size}`}
            onMouseDown={handlePressStart}
            onMouseUp={handlePressEnd}
            onMouseLeave={handlePressEnd}
            onTouchStart={handlePressStart}
            onTouchEnd={handlePressEnd}
            onTouchCancel={handlePressEnd}
        >
            <div className={changeStyle("button__light")}></div>
            <div className="button__shadow"></div>
            <div className={changeStyle("button__surface")}></div>
            {label &&  <p className={changeStyle("button__label")}>{label}</p>}
            {Icon && <Icon className={changeStyle("button__icon")} />}
        </button>
    )
}