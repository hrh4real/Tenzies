import React from "react";
import { useState, useRef, useEffect } from "react";
import Dice from "./src/components/Dice";

export default function App() {
    const [numbers, setNumbers] = useState(RANDOM_NUMBER())
    function RANDOM_NUMBER () {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false
            }))
    }
    function rollDice() {
        setNumbers(RANDOM_NUMBER())
    }
    return (
            <main>
                <div className="dice-container">
                {numbers.map((num, index) => <Dice key={num.index} value={num.value} />)}
                </div>
                <button
                    onClick={rollDice}
                    className="roll-dice"
                >
                    Roll Dice
                </button>
            </main>
    )
}