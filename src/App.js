import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from '../components/NavBar.js';
import Home from '../components/Home';
import Beers from '../components/Beers.js';
import FavoritedBeers from '../components/FavoritedBeer';
import Random from '../components/Random';

const App = (props) => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Welcome to the Drunken Doozy!
          </h1>
          <li>Sign Up</li>
          <li>Log In</li>
          <Router>
            <div>
              <NavBar />
              <Route exact path="/" component={Home} />
              <Route exact path="/beers" component={Beers} />
              <Route exact path="/favorited-beers" component={FavoritedBeers} />
              <Route exact path="/random" component={Random} />
            </div>
          </Router>
        </header>
      </div>
    );
}

export default App;
