import React, { Component } from 'react';
import Footer from './Footer';
import { getBeers } from '../actions/beer';
class Beers extends Component {
    state = {
        beers: []
    }

    render() {
        getBeers()
        return (
            <div className="App">
                <header className="App-header">
                    <h2>List of Beers</h2>
                    <li>{this.state.beers}</li>
                </header>
                < Footer/>
            </div>
        );
    }
}

export default Beers;