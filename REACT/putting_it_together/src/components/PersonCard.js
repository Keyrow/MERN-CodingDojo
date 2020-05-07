import React, { Component } from 'react';

class MyNewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            someAge: this.props.someAge
        }
    };

    addYear = () => {
        this.setState({ someAge: this.state.someAge + 1 });
    }

    render() {
        const { someName, someAge, someHair } = this.props;
        return (
            <div>
                <h2>{this.props.someName}</h2>
                <p>Age: {this.state.someAge}</p>
                <p>Hair Color: {this.props.someHair}</p>
                <button onClick={this.addYear}>Birthday Button for {someName}</button>

            </div>
        );
    }
}



export default MyNewComponent;