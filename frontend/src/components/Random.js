import React, { Component } from 'react';
import Footer from './Footer';
import GenerateRandom from './GenerateRandom';

class Random extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h2>Random Beer:</h2>
                    < GenerateRandom/>
                </header>
                < Footer/>
            </div>
        );
    }
}

export default Random;
