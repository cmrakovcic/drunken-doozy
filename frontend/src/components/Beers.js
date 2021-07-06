import React, { Component } from 'react';
import Footer from './Footer';
import { getAllBeers } from '../reducers/actions'

class Beers extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h2>List of Beers</h2>
                    <li beers={getAllBeers}></li>
                </header>
                < Footer/>
            </div>
        );
    }
}

export default Beers;
