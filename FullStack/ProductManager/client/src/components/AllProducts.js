import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const AllProducts = (props) => {
    // Stores all products
    const [products, setAllProducts] = useState([]);

    const getAll = () => {
        axios.get("http://localhost:8000/api/products")
            .then(response => {
                console.log(response);
                setAllProducts(response.data.results);
            });
    }
    //use the routes file to know what the routing url is
    useEffect(() => {
        getAll();
    }, []);

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(response => {
                getAll();
            })
    }

    return (
        // This is where the Products will be displayed/rendered
        <div>
            {
                products.map((product, i) =>
                    <div className="row" key={i}>
                        <div className="col-sm-6 offset-sm-3">
                            {/* Name of the product along on click will link to view one product which is viewing the product detail you clicked */}
                            <Link to={`/product/${product._id}`}><h3>{product.name}</h3></Link>
                        </div>
                        <div className="col-sm-3">
                            {/* button link to edit product */}
                            <Link to={`/product/${product._id}/edit`}><button className="col-sm-6 btn btn-primary">Edit</button></Link>
                            <button onClick={() => deleteHandler(product._id)} className="col-sm-6 btn btn-light">Delete</button>
                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default AllProducts