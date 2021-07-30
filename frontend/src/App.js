import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Beers from './components/Beers';
import FavoritedBeers from './components/FavoritedBeers';
import Random from './components/Random';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component{

  state = {
    beers: [],
    favoritedBeers: []
  }

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home}>
            </Route>
            <Route path="/beers" component={Beers}>
            </Route>
            <Route path="/favorited-beers" component={FavoritedBeers}>
            </Route>
            <Route path="/random" component={Random}>
            </Route>
          </Switch>
        </Router>
    </div>
    )
  }; 
}

export default App;