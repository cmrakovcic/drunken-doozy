import React, { Component } from 'react';
import Footer from './Footer';
import RandomBeersContainer from '../containers/RandomBeerContainer';

class Random extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="random-beer">
                        < RandomBeersContainer/>
                    </div>
                </header>
                < Footer/>
            </div>
        );
    }
}

export default Random;