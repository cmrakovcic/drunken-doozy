import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useHistory } from "react-router-dom";


const App = (props) => {

  const history = useHistory();
  
  const handleLogin = () =>{ 
    history.push("/login");
  }

  const handleSignup = () =>{ 
    history.push("/signup");
  }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Welcome to the Drunken Doozy!
          </h1>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleSignup}>Signup</button>
        </header>
      </div>
    );
}

export default App;
