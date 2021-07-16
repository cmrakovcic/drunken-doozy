import React, { Component } from 'react';
import Footer from './Footer';
import { getFavoritedBeers } from '../actions/favorited';
import { connect } from 'react-redux';
import FavoritedBeersList from './FavoritedBeersList';

class FavoritedBeers extends Component {

    state = {
        favoritedBeers: []
    }

    componentDidMount() {
        this.props.getFavoritedBeers()
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    < FavoritedBeersList/>
                </header>
                < Footer/>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        favoritedBeers: state.favoritedBeers
    }
}

// export default FavoritedBeers;
export default connect(mapStateToProps, { getFavoritedBeers })(FavoritedBeers)