import React from 'react';
import './App.css';
import { useHistory } from "react-router-dom";


const App = (props) => {

  const history = useHistory();
  
  const handleLogin = () => { 
    history.push("/login");
  }

  const handleSignup = () => { 
    history.push("/signup");
  }

    return (
      <div className="App">
        <header className="App-header">
          <img src={"https://pngimg.com/uploads/beer/beer_PNG2330.png"} className="App-logo" alt="logo" />
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