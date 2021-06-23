import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = (props) => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Welcome to the Drunken Doozy!
          </h1>
          <button>Sign Up</button>
          <button>Log In</button>
        </header>
      </div>
    );
}

export default App;
