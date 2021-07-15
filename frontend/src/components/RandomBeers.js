import React, { Component } from 'react';
import { connect } from "react-redux";


class RandomBeers extends Component {

    state = {
        randomBeer: []
    }


    render() {
        const random = this.props.randomBeer.map(randomBeer => <h1>{randomBeer.name}</h1>)
        // console.log("beers")
        return (
            <div>
                {random}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        randomBeer: state.randomBeersReducer.randomBeer
    }
}

export default connect(mapStateToProps)(RandomBeers);

// export default RandomBeers;