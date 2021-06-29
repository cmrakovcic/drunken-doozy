import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import favoritedBeersReducer from './reducers/favoritedBeersReducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import Beers from './components/Beers';
import FavoritedBeers from './components/FavoritedBeers';
import Random from './components/Random';

const store = createStore(
  favoritedBeersReducer,
  applyMiddleware(thunk)
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

ReactDOM.render((
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={App} />      
      <Route exact path="/home" component={Home} />
      <Route exact path="/beers" component={Beers} />
      <Route exact path="/favorited-beers" component={FavoritedBeers} />
      <Route exact path="/random" component={Random} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/logout" component={Logout} />
    </div>
  </Router>),
  document.getElementById('root')
);
