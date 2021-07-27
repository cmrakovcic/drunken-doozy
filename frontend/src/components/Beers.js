import React, { Component } from 'react';
import Footer from './Footer';
import { connect } from 'react-redux';
import { fetchAllBeers } from '../actions/beer';
import BeersContainer from '../containers/BeersContainer';

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
                    <div className="beers"><br></br>
                        <BeersContainer />
                    </div>
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