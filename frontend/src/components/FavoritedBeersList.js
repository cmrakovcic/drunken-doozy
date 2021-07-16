import React, { Component } from 'react';
import { connect } from "react-redux";
import FavoritedBeerCard from './FavoritedBeerCard';

class FavoritedBeersList extends Component {

    state = {
        favoritedBeers: []
    }

    render() {
        const favoritedBeers = this.props.favoritedBeers.map(favoritedBeer => (
            < FavoritedBeerCard
                key={favoritedBeer.id}
                id={favoritedBeer.id}
                name={favoritedBeer.name}
                abv={favoritedBeer.abv}
                ibu={favoritedBeer.ibu}
                food_pairing={favoritedBeer.food_pairing.join(", ")}
                />
        ))
        return (
            <div>
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

// export default FavoritedBeersList;
export default connect(mapStateToProps)(FavoritedBeersList);
