import React, { Component } from 'react';
import './App.css';

import User from './User/User';
// import UserDetail from './User/UserDetail';
import SubComponent from './User/SubComponent';
import TimeStamp from './User/timestamp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <User myUser={this.printUser()} />
        <p>This is the app Component</p>
        <SubComponent onRender={() => this.whenSubComponentRender()}></SubComponent>
        <TimeStamp />
      </div>
    );

  }
  whenSubComponentRender() {
    console.log('sub component rendered');
  }
  printUser() {
    let aUser;
    aUser = {
      fName: "Lucy",
      lName: "Shilling",
      dob: "17/02/1996",
      city: "Manchester"
    }
    return aUser;
  }
};




export default App;
