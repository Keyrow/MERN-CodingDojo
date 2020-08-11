import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './Form'
import { navigate } from '@reach/router';

const EditProduct = props => {
    const [product, setProduct] = useState({
        name: "",
        price: null,
        description: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        price: null,
        description: ""
    });

    const changeHandler = e => {
        const curData = {
            ...product,
            [e.target.name]: e.target.value
        };
        // validates and set data to new current data for the product
        validate(curData);
        setProduct(curData);
    }

    // All validations are here
    const validate = data => {
        const { ...curErrors } = errors;
        // Name validations
        if (data.name.length === 0) {
            curErrors.name = "This is a required field."
        } else if (data.name.length < 2) {
            curErrors.name = "Name must be at least 2 characters long."
        } else if (data.name.length > 100) {
            curErrors.name = "Server space ain't free yo."
        } else {
            curErrors.name = "";
        }
        //Price validations
        if (data.price.num) {
            curErrors.price = "Price is required"
        } else if (data.price.num < 0) {
            curErrors.price = "Price cannot be negative."
        } else {
            curErrors.price = null;
        }
        //Description Validations
        if (data.description.length === 0) {
            curErrors.description = "Description is required"
        } else if (data.description.length < 2) {
            curErrors.description = "Description must be at least 2 characters long."
        } else if (data.description.length > 100) {
            curErrors.description = "I asked for a description not your PHD Thesis"
        } else {
            curErrors.description = "";
        }
        setErrors(curErrors);
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(response => {
                setProduct(response.data.results);
            })
            .catch(err => {
                console.log(err);
            })
    }, [props.id])

    const submitData = () => {
        axios.put(`http://localhost:8000/api/products/${props.id}`, product)
            .then(response => {
                console.log(response);
                if (response.data.message === "success") {
                    setProduct({
                        name: "",
                        price: null,
                        description: ""
                    })
                    navigate("/");
                } else {
                    setErrors({
                        name: "Something wrong",
                        price: "u mess up",
                        description: "no you loser"
                    });
                }
            })
    }

    return (
        <div>
            <h1>Edit a Product</h1>
            <Form data={product} changeHandler={changeHandler} errors={errors} setData={setProduct} submitData={submitData} />
        </div>
    )
}

export default EditProduct
