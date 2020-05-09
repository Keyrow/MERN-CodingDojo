import React from 'react';

const BoxDisplay = ({ boxes }) => {
    return (
        <div>
            {boxes.map((val, i) =>

                <div key={i} style={val.style}>
                    <p>color: {val.color}</p>
                    <p>height: {val.height}</p>
                </div>

            )}
        </div>
    )
}

export default BoxDisplay;