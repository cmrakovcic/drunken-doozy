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
        this.props.fetchAllBeers()
        // debugger
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

const mapStateToProps = (stateFromStore) => {
    return {
        beers: stateFromStore.beers
    }
}

export default connect (mapStateToProps, { fetchAllBeers } )(Beers);