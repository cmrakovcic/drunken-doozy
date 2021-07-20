import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import beersReducer from './reducers/beersReducer';
import favoritedBeersReducer from './reducers/favoritedBeersReducer';
import userReducer from './reducers/userReducer';
import randomBeerReducer from './reducers/randomBeerReducer';
import favoriteButtonReducer from './reducers/favoriteButtonReducer';
import deleteButtonReducer from './reducers/deleteButtonReducer';

const rootReducer = combineReducers({
  userReducer: userReducer,
  beersReducer: beersReducer,
  favoritedBeersReducer: favoritedBeersReducer,
  randomBeersReducer: randomBeerReducer,
  favoriteButtonReducer: favoriteButtonReducer,
  deleteButtonReducer: deleteButtonReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);