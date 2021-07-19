import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Welcome from './components/Welcome';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Logout from './components/Logout';
import Beers from './components/Beers';
import FavoritedBeers from './components/FavoritedBeers';
import Random from './components/Random';
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
            <Route exact path="/" component={Welcome}>
            </Route>
            <Route path="/home" component={Home}>
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

// const mapStateToProps = (state) => {
//   return {
//     state
//   }
// }

export default App;