import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeadShot from './portrait.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">William Au</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <figure className="Info">
          <img src={HeadShot} className="Portrait"  alt="HeadShot"/>
          <figcaption className="Description">
            William Au <br/>
            Computer Science
          </figcaption>
        </figure>

        <div className="Buttons">
          <input ID="Button" type="submit" value="My Resume" />
        </div>
      </div>
      
    );
  }
}

export default App;
