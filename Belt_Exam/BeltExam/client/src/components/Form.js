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
            <label htmlFor="name">Name </label>
            <input type="text" name="name" onChange={e => changeHandler(e)} value={data.name} />
            <br />
            {
                errors.type ?
                    <p>{errors.type}</p>
                    :
                    ""
            }
            <label htmlFor="type">Type</label>
            <input type="text" name="type" onChange={e => changeHandler(e)} value={data.type} />
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
            {
                errors.skills ?
                    <p>{errors.skills}</p>
                    :
                    ""
            }
            <h4>Skills (optional):</h4>
            <label htmlFor="skillOne">skill 1 </label>
            <input type="text" name="skillOne" onChange={changeHandler} value={data.skillOne} />
            <br />
            <label htmlFor="skillTwo">skill 2 </label>
            <input type="text" name="skillTwo" onChange={changeHandler} value={data.skillTwo} />
            <br />
            <label htmlFor="skillThree">skill 3 </label>
            <input type="text" name="skillThree" onChange={changeHandler} value={data.skillThree} />
            <br />
            <button className="col-sm-2 btn btn-primary" type="submit">Submit</button>
        </form>
    )
}

export default Form