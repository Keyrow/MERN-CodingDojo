import React from 'react';

const Form = props => {
    const { data, changeHandler, errors, submitData } = props;



    const submitHandler = e => {
        e.preventDefault();
        submitData();
    }

    return (
        <form onSubmit={submitHandler}>
            {
                errors.name ?
                    <p>{errors.name}</p>
                    :
                    ""
            }
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" onChange={e => changeHandler(e)} value={data.name} />
            <br />
            {
                errors.price ?
                    <p>{errors.price}</p>
                    :
                    ""
            }
            <label htmlFor="price">Price: $</label>
            <input type="number" name="price" onChange={e => changeHandler(e)} value={data.price} />
            <br />
            {
                errors.description ?
                    <p>{errors.description}</p>
                    :
                    ""
            }
            <label htmlFor="description">Description: </label>
            <input type="text" name="description" onChange={changeHandler} value={data.description} />
            <br />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form