import React, { Component } from 'react';

class MyNewComponent extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.someName}</h2>
                <p>Age: {this.props.someAge}</p>
                <p>Hari Color: {this.props.someHair}</p>
            </div>
        );
    }
}

export default MyNewComponent;