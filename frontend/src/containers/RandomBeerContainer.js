import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchRandomBeer } from '../actions/random';
import FavoriteButton from '../components/FavoriteButton';
import RandomBeerCard from '../components/RandomBeerCard';

class RandomBeerContainer extends Component {

    state = {
        randomBeer: []
    }

    componentDidMount() {
        this.props.fetchRandomBeer()
    }

    render() {
        const randomBeer = this.props.randomBeer.map(randomBeer => (
            < RandomBeerCard
                key={randomBeer.id}
                id={randomBeer.id}
                name={randomBeer.name}
                abv={randomBeer.abv}
                ibu={randomBeer.ibu}
                food_pairing={randomBeer.food_pairing.join(", ")} 
                tagline={randomBeer.tagline}/>
        ))
        return (
            <div>
                {randomBeer}
                < FavoriteButton/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        randomBeer: state.randomBeersReducer.randomBeer
    }
}

export default connect(mapStateToProps, { fetchRandomBeer })(RandomBeerContainer);