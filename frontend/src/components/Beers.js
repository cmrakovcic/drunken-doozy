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
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="beers"><br></br><BeerList /></div>
                </header>
                < Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        beers: state.beers
    }
}

export default connect (mapStateToProps, { fetchAllBeers } )(Beers);