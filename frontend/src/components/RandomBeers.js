import React, { Component } from 'react';
import { connect } from "react-redux";
import RandomBeerCard from './RandomBeerCard';

class RandomBeers extends Component {

    state = {
        randomBeer: []
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
                <p>
                    {randomBeer}
                    <button>Favorite</button>
                </p>
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
