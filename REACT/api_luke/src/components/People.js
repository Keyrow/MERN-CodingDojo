import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const People = ({ id }) => {
    const [person, setPerson] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                console.log(response)
                setPerson(response.data)
            })
    })

    return (
        <div>
            <h1>{person.name}</h1>
            <h2>Height: {person.height} cm</h2>
            <h2>Hair Color: {person.hair_color}</h2>
            <h2>Eye Color: {person.eye_color}</h2>
        </div>
    )
};
export default People;