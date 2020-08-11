import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';


// All 3 effects goes here
const effects = [
    { descr: "poison gas trap! You lose 1 HP", effect: -1 },
    { descr: "you found a healing potion! +1 to HP", effect: 1 },
    { descr: "A trap was triggered! You got hit by an arrow. You lose 3 HP", effect: -3 }
]

const Level = () => {
    const [currLevel, setCurrLevel] = useState(1);
    const [currEffect, setCurrEffect] = useState({});
    const [currHP, setHP] = useState(10);

    // For every level, do the following
    // Shuffle effects arra (before rendering anything, AND when level changes) -> use "useEffect"
    useEffect(shuffle, [currLevel]);

    // Shuffle function, shuffle effects, and update shuffled array state
    function shuffle() {
        var currentIndex = effects.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = effects[currentIndex];
            effects[currentIndex] = effects[randomIndex];
            effects[randomIndex] = temporaryValue;
        }
        // effects array is now shuffled

        // setShuffle(effects)
    }

    // Level Handler goes here
    const clickHandler = (item) => {
        console.log(item.descr)
        // update state with selected effect
        setCurrEffect(item)


        // update HP, based on selected effect
        // Implement a situation if HP hits 0 (game over)
        setHP(currHP + item.effect);
        if (currHP < 1) {
            navigate("/game_over");
        }

        // increase level by 1
        // Implement a situation where after completing 10 levels you win
        setCurrLevel(currLevel + 1)
        if (currLevel > 9) {
            navigate("/win");


        }
    }

    // Hovering Function, when hovering the door will creak open
    const hover = (e) => {
        e.target.setAttribute("src", "/images/doorOpen.png");
    }

    // When not hovering the door image will revert back to door closed
    const unHover = (e) => {
        e.target.setAttribute("src", "/images/doorClosed.png");
    }

    // Create "door #" buttons for each effect
    return (
        <div className="levels">
            <Link to="/">Back to Main Menu</Link>
            <h1 class="status">Level: {currLevel} || HP: {currHP}</h1>
            {
                // .map() will go through a list, and do something for every item in the given list
                effects.map((item, idx) => {
                    return <img class="door" src="/images/doorClosed.png" alt='door' key={idx} onMouseEnter={hover} onMouseOut={unHover} onClick={() => clickHandler(item)} />
                })
            }
            <div>
                <span style={{ color: currEffect.effect > 0 ? "green" : "red", fontWeight: "bold" }}>
                    {currEffect.descr}
                </span>
            </div>
        </div>
    )
}

export default Level

// onMouseOver={this.src = "/images/doorOpen.png"}
