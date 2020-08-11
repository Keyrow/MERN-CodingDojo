import React from 'react'
import axios from 'axios';
import { Router, Link } from '@reach/router';
import { useState } from 'react';
import { navigate } from '@reach/router';
import Form from './Form';


const NewPet = () => {
    const [pet, setPet] = useState({
        name: "",
        type: "",
        skillOne: "",
        skillTwo: "",
        skillThree: "",
        description: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        type: "",
        description: ""
    })

    const changeHandler = e => {
        setPet({
            ...pet,
            [e.target.name]: e.target.value
        });
    }

    const submitData = () => {
        axios.post("http://localhost:8000/api/pets", pet)
            .then(response => {
                if (response.data.message === "success") {
                    setPet({
                        name: "",
                        type: "",
                        skillOne: "",
                        skillTwo: "",
                        skillThree: "",
                        description: ""
                    })
                    navigate("/");
                }
                else {
                    console.log(response.data.results);
                    const { ...currErrors } = errors
                    // name
                    if (response.data.results.errors.name) {
                        currErrors.name = response.data.results.errors.name.properties.message
                    } else {
                        currErrors.name = "";
                    }
                    // type
                    if (response.data.results.errors.type) {
                        currErrors.type = response.data.results.errors.type.properties.message
                    } else {
                        currErrors.type = "";
                    }
                    //description
                    if (response.data.results.errors.description) {
                        currErrors.description = response.data.results.errors.description.properties.message
                    } else {
                        currErrors.description = "";
                    }
                    setErrors(currErrors);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <h2>Know a pet needing a home?</h2>
            <div className="col-sm-3">
                <Link to="/">back to home</Link>
            </div>
            <Form data={pet} changeHandler={changeHandler} errors={errors} setData={setPet} submitData={submitData} />
        </div>
    )
}
export default NewPet
