import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Planets = ({ id }) => {
    const [planet, setPlanet] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                console.log(response)
                setPlanet(response.data)
            })
    }, []);


    return (
        <div>
            <h1>{planet.name}</h1>
            <h2>Climate: {planet.climate}</h2>
            <h2>terrain: {planet.terrain}</h2>
            <h2>Population: {planet.population}</h2>
        </div>
    )
}
export default Planets;