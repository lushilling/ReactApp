import React, { Component } from 'react';

class UserDetail extends Component {

    constructor() {
        super();
        this.state = {
            city: "Salford"
        }
        this.addClick = this.addClick.bind(this);
    }

    addClick() {
        this.setState(
            { city: document.getElementById("click").value }
        )
    }

    render() {
        return (
            <div>
                <p>D.O.B.: {this.props.userData.dob} </p>
                <p>City: {this.props.userData.city} </p>
                <input id="click" />
                <p>
                    {this.state.city}
                </p>
                <button onClick={ this.addClick }>Change City</button>
            </div>
        );
    }
}

export default UserDetail;