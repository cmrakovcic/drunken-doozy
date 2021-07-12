import React, { Component } from 'react';
import Footer from './Footer';
import { fetchAllBeers } from '../actions/beer';
import { connect } from 'react-redux';
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
                    {/* <h2>List of Beers</h2> */}
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

export default connect (mapStateToProps, { fetchAllBeers })(Beers);