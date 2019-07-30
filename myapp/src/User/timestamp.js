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
        this.setState({time: new Date()})
    }

    render() {
        return (
            <div>
            <button onClick={this.addClick}>Refresh Time Stamp
            </button>

            <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default TimeStamp;
