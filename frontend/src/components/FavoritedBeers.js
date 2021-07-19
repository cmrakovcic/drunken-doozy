import React, { Component } from 'react';
import Footer from './Footer';
import { getFavoritedBeers } from '../actions/favorited';
import { fetchPostFavoritedBeers } from '../actions/favoriteButton';
import { connect } from 'react-redux';
import FavoritedBeersList from './FavoritedBeersList';

class FavoritedBeers extends Component {

    state = {
        favoritedBeers: []
    }

    componentDidMount() {
        this.props.getFavoritedBeers()
        this.props.fetchPostFavoritedBeers()
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="favorited-beers"><br></br><FavoritedBeersList/></div>
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
export default connect(mapStateToProps, { getFavoritedBeers, fetchPostFavoritedBeers })(FavoritedBeers)