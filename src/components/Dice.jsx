import React from "react";

export default function Dice(props) {
    const styles = {
        background: props.isHeld ? "linear-gradient(135deg, rgb(249, 255, 255), rgba(1, 226, 53, 0.9))" : "white"
    }
    return (
        <button
            // className={props.isHeld ? "hold-button" : ""}
            style={styles}
            onClick={props.hold}
            aria-label={`Die with value ${props.value},
            ${props.isHeld ? "held" : "not held"}`}
            aria-pressed={props.isHeld}
        >
            {props.value}
        </button>
    )
}