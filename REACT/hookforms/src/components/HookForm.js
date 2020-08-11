import React, { Component } from 'react';

class HookForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            cPassword: ""
        }
        // This bind is crucial to have
        this.onChange = this.onChange.bind(this);
    }
    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input onChange={this.onChange} type="text" name="firstName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input onChange={this.onChange} type="text" name="lastName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input onChange={this.onChange} type="text" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input onChange={this.onChange} type="password" name="password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cPassword">Confirm Password</label>
                        <input onChange={this.onChange} type="password" name="cPassword" />
                    </div>
                </form>
                <p>first name: {this.state.firstName}</p>
                <p>Last Name: {this.state.lastName}</p>
                <p>Email: {this.state.email}</p>
                <p>Password: {this.state.password}</p>
                <p>Confirm Password: {this.state.cPassword}</p>
            </div >
        );
    }
}

export default HookForm;
