import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './Form'
import { navigate } from '@reach/router';
import { Link } from '@reach/router';
import AllPets from './AllPets';

const EditPet = props => {
    const [pet, setPet] = useState({
        name: "",
        type: "",
        skills: "",
        description: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        type: "",
        skills: "",
        description: ""
    });

    const changeHandler = e => {
        const curData = {
            ...pet,
            [e.target.name]: e.target.value
        };
        // validates and set data to new current data for the pet
        validate(curData);
        setPet(curData);
    }

    // All validations are here
    const validate = data => {
        const { ...curErrors } = errors;
        // Name validations
        if (data.name.length === 0) {
            curErrors.name = "This is a required field."
        } else if (data.name.length < 3) {
            curErrors.name = "Name must be at least 2 characters long."
        } else if (data.name.length > 100) {
            curErrors.name = "Server space ain't free yo."
        } else {
            curErrors.name = "";
        }
        // Type validations
        if (data.type.length === 0) {
            curErrors.type = "This is a required field."
        } else if (data.type.length < 3) {
            curErrors.type = "Type must be at least 3 characters long."
        } else if (data.type.length > 100) {
            curErrors.type = "Server space ain't free mang."
        } else {
            curErrors.type = "";
        }
        //Description Validations
        if (data.description.length === 0) {
            curErrors.description = "Description is required"
        } else if (data.description.length < 3) {
            curErrors.description = "Description must be at least 3 characters long."
        } else if (data.description.length > 100) {
            curErrors.description = "I asked for a description not your PHD Thesis"
        } else {
            curErrors.description = "";
        }
        setErrors(curErrors);
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(response => {
                setPet(response.data.results);
            })
            .catch(err => {
                console.log(err);
            })
    }, [props.id])

    const submitData = () => {
        axios.put(`http://localhost:8000/api/pets/${props.id}`, pet)
            .then(response => {
                console.log(response);
                if (response.data.message === "success") {
                    setPet({
                        name: "",
                        type: "",
                        skills: "",
                        description: ""
                    })
                    navigate("/");
                } else {
                    setErrors({
                        name: "Something wrong",
                        type: "u mess up",
                        skills: "you screwed up",
                        description: "no you loser, its wrong"
                    });
                }
            })
    }

    return (
        <div>
            <h2>Edit {pet.name}</h2>
            <Link to="/">back to home</Link>
            <Form data={pet} changeHandler={changeHandler} errors={errors} setData={setPet} submitData={submitData} />
        </div>
    )
}

export default EditPet
