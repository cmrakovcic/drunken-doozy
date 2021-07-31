import React, { Component } from 'react';
import { connect } from "react-redux";
import { getFavoritedBeers } from '../actions/favorited';
import FavoritedBeerCard from '../components/FavoritedBeerCard';
// import { deleteFavoritedBeer } from '../reducers/deleteButtonReducer';

class FavoritedBeersContainer extends Component {

    state = {
        favoritedBeers: []
    }

    componentDidMount() {
        this.props.getFavoritedBeers()
    }

    render() {
        const favoritedBeers = this.props.favoritedBeers.map(favoritedBeer => (
            < FavoritedBeerCard
                key={favoritedBeer.id}
                id={favoritedBeer.id}
                name={favoritedBeer.name}
                abv={favoritedBeer.abv}
                ibu={favoritedBeer.ibu}
                // food_pairing={favoritedBeer.food_pairing.join(", ")}
                food_pairing={favoritedBeer.food_pairing}
                tagline={favoritedBeer.tagline}
                />
        ))
        return (
            <div id="favorited-beer-container">
                <br></br>
                {favoritedBeers}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        favoritedBeers: state.favoritedBeersReducer.favoritedBeers
    }
}

export default connect(mapStateToProps, { getFavoritedBeers })(FavoritedBeersContainer);