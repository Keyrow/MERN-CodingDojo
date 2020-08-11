import React from 'react'
import { Link } from '@reach/router'

const Win = () => {
    return (
        <div class="Win">
            <img src="/images/win.png" alt="win"/><br/>
            <h4 class="winText">Congratulations, you have escaped the dungeon. I hope you learned
                your lesson</h4>
                <h4 class="winText2"> to not accept a random spiked drink causing your kidnap to
                this atrocious dungeon.
            </h4>
            <Link to="/">
                <button class="button button5">Main Menu</button>
            </Link>
        </div>
    )
}

export default Win
