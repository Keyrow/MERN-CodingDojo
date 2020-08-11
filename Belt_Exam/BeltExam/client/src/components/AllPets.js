import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Router, Link } from '@reach/router';

const AllPets = (props) => {
    // Stores all pets
    const [pets, setAllPets] = useState([]);

    const getAll = () => {
        axios.get("http://localhost:8000/api/pets")
            .then(response => {
                console.log(response);
                setAllPets(response.data.results);
            });
    }
    //use the routes file to know what the routing url is
    useEffect(() => {
        getAll();
    }, []);

    return (
        <div>
            <h2>These pets are looking for a good home</h2>
            <Link to="/pet/new">add a new pet to the shelter</Link>
            {/* add a pet to the shelter */}

            <table class="table">
                <thead>

                    <tr >
                        <th scope="col-sm-6">Name</th>
                        <th scope="col-sm-6">Type</th>
                        <th scope="col-sm-6">Action</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        pets.map((pet, i) => {
                            return (<tr key={i}>
                                <th>{pet.name}</th>
                                <th>{pet.type}</th>
                                <th><Link to={`/pet/${pet._id}`}>Details</Link> |&nbsp;
                                            <Link to={`/pet/${pet._id}/edit`}>Edit</Link>
                                </th>
                            </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}


export default AllPets