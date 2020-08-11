import React, { useState } from 'react';

const Pokemon = props => {
    const [pokemons, setPokemons] = useState(null);

    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=964")
            .then(r => r.json())
            .then(res => {
                console.log(res)
                setPokemons(res.results);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <>
            <p>Hello World, Welcome to my Pokemon API</p>
            {pokemons != null && pokemons.map((pokemon, index) => {
                return (<div key={index}>{pokemon.name}</div>)
            })}
            <button onClick={fetchPokemon}>Fetch Pokemon</button>
        </>
    )
};
export default Pokemon;