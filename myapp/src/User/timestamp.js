import React, { Component } from 'react';


class TimeStamp extends Component {

    constructor() {
        super();
        this.state = {
            time: new Date()
        }
        this.addClick = this.addClick.bind(this);
    }

    addClick() {
        this.setState(
            { time: new Date() }
        )
    }

    render() {
        return (
            <div>
                <button onClick={ this.addClick }>Refresh Time Stamp</button>
                <p>The time is: { this.state.time.toLocaleTimeString() }</p>
            </div>
        )
    }
}

export default TimeStamp;


//in constructor only set to new date
//We can then specify what we want in the render this.state.time 
//This allows more flexibiltity