import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <alert-notification id="notification" message="Hello world!" life="3000">
            <span slot="content">Hello world closes after 3 seconds</span>
          </alert-notification>
          <button onClick={ () => this.showNotification('danger')}>Danger Alert!</button>
          <button onClick={ () => this.showNotification('success')}>Success Alert!</button>
        </p>
      </div>
    );
  }

  showNotification(type) {
    document.querySelector("#notification").show(type);
  }
}

export default App;
