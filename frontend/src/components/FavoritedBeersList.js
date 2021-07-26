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
                // food_pairing={favoritedBeer.food_pairing.join(", ")}
                food_pairing={favoritedBeer.food_pairing}
                tagline={favoritedBeer.tagline}
                />
        ))
        return (
            <div>
                {favoritedBeers}
                {/* <button onClick={_=> this.props.deleteFavoritedBeer(this.props.favoritedBeer.id)}>delete</button> */}

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        favoritedBeers: state.favoritedBeersReducer.favoritedBeers
    }
}

// const mapDispatchToProps = dispatch => ({
//     addFavoritedBeer: name => dispatch({ type: "ADD_FAVORITED_BEER", name }),
//     deleteFavoritedBeer: id=> dispatch({type: "DELETE_FAVORITED_BEER", id: id})
// })

// export default FavoritedBeersList;
export default connect(mapStateToProps)(FavoritedBeersList);
