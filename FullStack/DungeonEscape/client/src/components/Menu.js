import React from 'react'
import { Link } from '@reach/router';

const Menu = () => {
    return (
        <div className="menu">
            <img src="/images/title.png" alt="GameTitle" /><br />
            <Link to="/game">
                <button class="button1">
                    Start
                </button>
            </Link>
        </div>
    )
}

export default Menu
