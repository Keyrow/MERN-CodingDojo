import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const SearchBar = props => {
    const dropDown = ["people", "planets"];
    const [searchFor, setSeatchFor] = useState(dropDown[0]);
    const [idValue, setIdValue] = useState("");

    const formHandler = (e) => {
        e.preventDefault();
        if(searchFor === dropDown[0]) {
            navigate(`/people/${idValue}`)
        } else {
            navigate(`/planet/${idValue}`)
        }
    }
    const selectHandler = val => {
        setSeatchFor(val)
        console.log("val", val)
    }
    
    const idHandler = val => {
        setIdValue(val)
        console.log("val", val)
    }

    return (
        <>
            <div className="row mt-5">
                <div className="col-sm">
                    <form onSubmit={ formHandler } className="form-inline">
                        <div className="form-group">
                            <label htmlFor="dropDown">Search For: </label>
                            <select id="dropDown" onChange={ e => selectHandler(e.target.value) } className="form-control ml-3" name="searchFor">
                                {
                                    dropDown.map((name, i) => 
                                        <option value={ name } key={ i }>{ name }</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="form-group ml-3">
                            <label htmlFor="typeId">ID: </label>
                            <input className="form-control ml-3" onChange={ e => idHandler(e.target.value)} type="number" name="typeId" id="typeId"/>
                        </div>
                        <button className="btn btn-primary ml-3" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SearchBar;