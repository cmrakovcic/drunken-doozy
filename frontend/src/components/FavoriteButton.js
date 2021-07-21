import React, { Component } from 'react';
import '../App.css';
import { connect } from "react-redux"
import { fetchPostFavoritedBeers } from '../actions/favoriteButton';

class FavoriteButton extends Component {

    state = {
        favoritedBeers: []
    }

    handleFavorite = (evt) => {
        this.setState({
            [evt.target.id]: evt.target.id
        })
        this.props.fetchPostFavoritedBeers()
    }

    render() {
        return (
            <div>
                <button onClick={this.handleFavorite}>Favorite</button>
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         favoritedBeers: state.favoritedBeersReducer.favoritedBeers
//     }
// }

export default connect(null, { fetchPostFavoritedBeers })(FavoriteButton);