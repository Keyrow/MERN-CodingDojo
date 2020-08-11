import React, { useState } from 'react';
import App from '../App';

const Form = props => {
    const { inputs, setInputs } = props;

    const [fNameError, setFNameError] = useState("");
    const [lNameError, setLNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [cPasswordError, setCPasswordError] = useState("");


    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });

        if (e.target.name === "firstName") {
            // Sensei bonus
            if (e.target.value.length === 0) {
                setFNameError("");

            }
            else if (e.target.value.length < 2) {
                setFNameError("First Name must be at least 2 characters!");

            } else if (e.target.value.length >= 2) {
                setFNameError("");

            }
        }

        if (e.target.name === "lastName") {
            if (e.target.value.length < 2) {
                setLNameError("Last Name must be at least 2 characters!");
            } else if (e.target.value.length >= 2) {
                setLNameError("");
            }
        }

        if (e.target.name === "email") {
            if (e.target.value.length < 5) {
                setEmailError("Email must be at least 5 characters!");
            } else if (e.target.value.length >= 5) {
                setEmailError("");
            }
        }

        if (e.target.name === "password") {
            if (e.target.value.length < 8) {
                setPasswordError("Password must be at least 8 characters!");
            } else if (e.target.value.length >= 8) {
                setPasswordError("");
            }
        }

        if (e.target.name === "cPassword") {
            if (e.target.value != inputs.password) {
                setCPasswordError("Passwords do not match!");
            } else if (e.target.value === inputs.password) {
                setCPasswordError("");
            }
        }


    };
    return (
        <form>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input onChange={onChange} type="text" name="firstName" />
                {
                    fNameError ?
                        <p style={{ color: 'red' }}>{fNameError}</p> :
                        ''
                }
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input onChange={onChange} type="text" name="lastName" />
                {
                    lNameError ?
                        <p style={{ color: 'red' }}>{lNameError}</p> :
                        ''
                }
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input onChange={onChange} type="text" name="email" />
                {
                    emailError ?
                        <p style={{ color: 'red' }}>{emailError}</p> :
                        ''
                }
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={onChange} type="password" name="password" />
                {
                    passwordError ?
                        <p style={{ color: 'red' }}>{passwordError}</p> :
                        ''
                }
            </div>
            <div className="form-group">
                <label htmlFor="cPassword">Confirm Password</label>
                <input onChange={onChange} type="password" name="cPassword" />
                {
                    cPasswordError ?
                        <p style={{ color: 'red' }}>{cPasswordError}</p> :
                        ''
                }
            </div>
        </form>
    );
};
export default Form;