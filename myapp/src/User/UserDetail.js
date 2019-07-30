import React, { Component } from 'react';

class UserDetail extends Component {
    
    render() {
        return (
            <div>
                <p>D.O.B.: {this.props.userData.dob} </p>
                <p>City: {this.props.userData.city} </p>
            </div>
        );
    }
}

export default UserDetail;
