import React, { Component } from 'react';

const PersonCard = props => {
    return (
        <div>
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: {props.someAge}</p>
            <p>Hair Color: {props.someHair}</p>
        </div>
    );
}

export default PersonCard;