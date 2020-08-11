import React from 'react'
import { Link } from '@reach/router'

const GameOver = () => {
    return (
        <div class="GameOver">
            <img src="/images/gameOver.png" alt="lose" /><br />
            <img src="/images/youDied.jpg" alt="died" /><br />
            <Link to="/">
                <button class="button button5">Restart Game</button>
            </Link>
        </div>
    )
}

export default GameOver
