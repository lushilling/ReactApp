import React, { Component } from 'react';
import './App.css';

import User from './User/User';
import UserDetail from './User/UserDetail';
import SubComponent from './User/SubComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <User />
        <UserDetail />
        <p>This is the app Component</p>
        <SubComponent onRender={() => this.whenSubComponentRender()}></SubComponent>
      </div>
    );

  }
  whenSubComponentRender() {
    console.log('sub component rendered');
  }
};


export default App;
