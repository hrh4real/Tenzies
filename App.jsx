import React, { useState, useRef, useEffect } from "react";
import Dice from "./src/components/Dice";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function App() {
    const [numbers, setNumbers] = useState(() => generateNumbers());
    const [rollCount, setRollCount] = useState(0);
    const newGameButtonRef = useRef(null);

    let gameWon = numbers.every(num => num.isHeld) &&
                    numbers.every(num => num.value === numbers[0].value);
    
    function generateNumbers() {
        return Array.from({ length: 10 }, () => ({
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }));
    }

    function rollDice() {
        if (gameWon) {
            setNumbers(generateNumbers());  // Reset game
            setRollCount(0);
        } else {
            setNumbers(prevNum => prevNum.map(num => 
                num.isHeld ? num : { ...num, value: Math.ceil(Math.random() * 6) }
            ));
            setRollCount(prev => prev + 1);
        }
    }

    function hold(id) {
        setNumbers(prevNum => prevNum.map(num =>
            num.id === id ? { ...num, isHeld: !num.isHeld } : num
        ));
    }

    useEffect(() => {
        if (gameWon && newGameButtonRef.current) {
            newGameButtonRef.current.focus();
        }
    }, [gameWon]);

    return (
        <main>
            {gameWon && <Confetti />}
            {gameWon ? (
                <div className="game-won">
                    <h1>🎉 You Won in {rollCount} Rolls! 🎉</h1>
                    <button onClick={rollDice} className="roll-dice" ref={newGameButtonRef}>New Game</button>
                </div>
            ) : (
                <>
                    <div className="heading-container">
                        <h1>Tenzies</h1>
                        <p>Roll until all the dice are the same. Click each die to freeze it at its current value.</p>
                    </div>
                    <div className="dice-container">
                        {numbers.map(num => (
                            <Dice key={num.id} value={num.value} isHeld={num.isHeld} hold={() => hold(num.id)} />
                        ))}
                    </div>
                    <button onClick={rollDice} className="roll-dice">Roll Dice</button>
                </>
            )}
        </main>
    );
}