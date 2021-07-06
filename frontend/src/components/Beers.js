import React, { Component } from 'react';
import Footer from './Footer';
// import { getAllBeers } from '../reducers/actions'

class Beers extends Component {
    state = {
        beers: []
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h2>List of Beers</h2>
                    <li>{this.state.beers}</li>
                    {/* <li>{getAllBeers()}</li> */}
                </header>
                < Footer/>
            </div>
        );
    }
}

export default Beers;