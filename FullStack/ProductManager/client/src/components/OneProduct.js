import React, { useState, useEffect } from 'react'
import axios from 'axios';

const OneProduct = props => {
    const [product, setProduct] = useState({
        _id: "",
        name: "",
        price: [],
        description: ""
    });

    //use the routes file to know what the routing url is
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            // this is what you get back
            .then(response => {
                if (response.data.message === "success") {
                    setProduct(response.data.results);
                }
            })
    }, [props.id]);
    return (
        <div>
            <h2>{product.name}</h2>
            <ul>
                <li>Price: ${product.price}</li>
                <li>Description: {product.description}</li>
            </ul>
        </div>
    )
}

export default OneProduct
