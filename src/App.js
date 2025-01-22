import React, { Component } from 'react';
import logo from './avatar.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Halo!</h1>
        </header>
        <p className="App-intro">
          Mari berkenalan, saya <a href="https://www.linkedin.com/in/riantm/">Rian</a>. Salam kenal!
        </p>
      </div>
    );
  }
}

export default App;
