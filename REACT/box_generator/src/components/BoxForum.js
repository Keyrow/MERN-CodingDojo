import React, { useState } from 'react';

const BoxForum = ({ boxes, setBoxes }) => {
    const [color, setColor] = useState("red");
    const [height, setHeight] = useState("150");

    const colorHandler = (e) => {
        setColor(e.target.value);
    }

    const heightHandler = (e) => {
        setHeight(e.target.value);
    }

    const forumHandler = (e) => {
        e.preventDefault();
        setBoxes([...boxes, {
            color: color,
            height: height,
            style: {
                display: "inline-block",
                border: "1px solid " + color,
                height: height + "px"
            }
        }]);
    }

    return (
        <div>
            <form onSubmit={forumHandler}>
                <input type='text' value={color} onChange={colorHandler} />
                <input type='text' value={height} onChange={heightHandler} />
                <input type='submit' value='create a box!!' />
            </form>
        </div>
    )
}

export default BoxForum;