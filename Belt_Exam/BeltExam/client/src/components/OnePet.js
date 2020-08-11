import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const OnePet = props => {
    const [pet, setPet] = useState({
        _id: "",
        name: "",
        style: "",
        skills: ""
    });

    const getAll = () => {
        axios.get("http://localhost:8000/api/pets")
            .then(response => {
                console.log(response);
                setPet(response.data.results);
            });
    }
    //use the routes file to know what the routing url is
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
            // this is what you get back
            .then(response => {
                if (response.data.message === "success") {
                    setPet(response.data.results);
                }
            })
    }, [props.id]);

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(response => {
                getAll();
                // after adopting the pet, navigate back to home page
                navigate("/");
            })
    }

    return (
        <div>
            <Link to="/">back to home</Link>
            <button onClick={() => deleteHandler(pet._id)} className="col-sm-2 btn btn-primary">Adopt {pet.name}</button>
            <h2>Details about: {pet.name}</h2>
            <h4>Pet type: {pet.type}</h4>
            <h4>Description: {pet.description}</h4>
            <h4>Skills:
                <li>{pet.skillOne}</li>
                <li>{pet.skillTwo}</li>
                <li>{pet.skillThree}</li>
            </h4>
        </div>
    )
}

export default OnePet
