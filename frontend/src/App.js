import React, { Component } from 'react';
import './App.css';
// import Footer from './components/Footer';
// import {connect} from 'react-redux';
import NavBar from './components/NavBar';
import Home from './Home';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Logout from './components/Logout';
import Beers from './components/Beers';
import FavoritedBeers from './components/FavoritedBeers';
import Random from './components/Random';
// import { getBeers } from './actions/beer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component{

  state = {
    beers: [],
    favoritedBeers: [],
    loggedIn: true
  }

  render() {
    return (
      <div className="App">
        <Router>
          {/* If you want navbar to go away change state of signedin */}
          {this.state.loggedIn ? <NavBar /> : true }
          <Switch>
            <Route exact path="/">
            </Route>
            <Route path="/home" component={Home}>
              {/* <Home /> */}
            </Route>
            <Route path="/beers" component={Beers}>
              {/* <BeersContainer /> */}
            </Route>
            <Route path="/favorited-beers" component={FavoritedBeers}>
              {/* <FavoritedBeersContainer /> */}
            </Route>
            <Route path="/random" component={Random}>
              {/* <Random /> */}
            </Route>
          </Switch>
        </Router>
    </div>
    )
  }; 
}

// const mapStateToProps = (state) => {
//   return {
//     state
//   }
// }

export default App;
