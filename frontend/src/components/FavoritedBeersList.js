import React, { Component } from 'react';
import { connect } from "react-redux";

class FavoritedBeersList extends Component {

    state = {
        favoritedBeers: []
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        favoritedBeers: state.beersReducer.favoritedBeers
    }
}

// export default FavoritedBeersList;
export default connect(mapStateToProps)(FavoritedBeersList);
