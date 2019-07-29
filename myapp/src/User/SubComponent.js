import React, { Component } from 'react';

export class SubComponent extends Component {

    render() {
        this.props.onRender();
        return (
            <div>
                <p>This code is within SubComponent</p>
            </div>
        )
    }
}


export default SubComponent;