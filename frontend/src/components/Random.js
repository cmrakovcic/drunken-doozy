import React, { Component } from 'react';
import Footer from './Footer';
import GenerateRandom from './GenerateRandom';
import { connect } from 'react-redux';
import { fetchRandomBeer } from '../actions/random';

class Random extends Component {

    state = {
        random: []
    }

    componentDidMount() {
        this.props.fetchRandomBeer()
    }

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

export default connect(null, { fetchRandomBeer } )(Random);
