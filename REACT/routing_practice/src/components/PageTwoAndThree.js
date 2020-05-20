import React, { useState } from 'react';
import { Link } from '@reach/router';

const PageTwoAndThree = props => {
    let isNumber = true;
    if (isNaN(+props.id)) {
        isNumber = false;
    }
    return (
        <div>
            {
                isNumber ?
                    <p>The number is: {props.id}</p> :
                    <p>The word is: {props.id}</p>
            }
        </div>
    )
}

export default PageTwoAndThree;



