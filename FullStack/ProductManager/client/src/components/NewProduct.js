import React from 'react'
import Form from './Form'
import { useState } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'

const NewProduct = () => {
    const [product, setProduct] = useState({
        name: "",
        price: null,
        description: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        price: null,
        description: ""
    })

    const changeHandler = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }
    const submitData = () => {
        axios.post("http://localhost:8000/api/products", product)
            .then(response => {
                if (response.data.message === "success") {
                    setProduct({
                        name: "",
                        price: null,
                        description: ""
                    })
                    navigate("/");
                }
                else {
                    console.log(response.data.results);
                    const { ...currErrors } = errors
                    if (response.data.results.errors.name) {
                        currErrors.name = response.data.results.errors.name.properties.message
                    } else {
                        currErrors.name = "";
                    }
                    if (response.data.results.errors.price) {
                        currErrors.price = response.data.results.errors.price.properties.message
                    } else {
                        currErrors.price = null;
                    }
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
            <h2>Create New Product</h2>
            <Form data={product} changeHandler={changeHandler} errors={errors} setData={setProduct} submitData={submitData} />
        </div>
    )
}

export default NewProduct
