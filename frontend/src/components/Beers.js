import React, { Component } from 'react';
import Footer from './Footer';
import { fetchAllBeers } from '../actions/beer';
import { connect } from 'react-redux';
import BeerList from './BeerList';

class Beers extends Component {
    state = {
        beers: []
    }

    componentDidMount() {
        // FETCH
        this.props.fetchAllBeers()
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <BeerList />
                </header>
                < Footer/>
            </div>
        );
    }
}

export default connect (null, { fetchAllBeers })(Beers);