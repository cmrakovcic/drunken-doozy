import React, { Component } from 'react';
import Footer from './Footer';
import { connect } from 'react-redux';
import { fetchRandomBeer } from '../actions/random';
import RandomBeers from './RandomBeers';

class Random extends Component {

    state = {
        randomBeer: []
    }

    componentDidMount() {
        this.props.fetchRandomBeer()
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="random-beer">< RandomBeers/></div>
                </header>
                < Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        randomBeer: state.randomBeer
    }
}

export default connect (mapStateToProps, { fetchRandomBeer } )(Random);