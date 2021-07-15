import React, { Component } from 'react';
import { connect } from "react-redux";

class RandomBeers extends Component {

    state = {
        randomBeer: []
    }

    render() {
        const randomBeer = this.props.randomBeer.map(randomBeer => <h1>{randomBeer.name}</h1>)
        const randomBeerTag = this.props.randomBeer.map(randomBeer => <p>Tagline: {randomBeer.tagline}</p>)
        const randomBeerDescription = this.props.randomBeer.map(randomBeer => <p>Description: {randomBeer.description.join}</p>)
        const randomBeerBrewDate = this.props.randomBeer.map(randomBeer => <p>First Brewed: {randomBeer.first_brewed}</p>)
        const randomBeerABV = this.props.randomBeer.map(randomBeer => <p>ABV: {randomBeer.abv}%</p>)
        const randomBeerIBU = this.props.randomBeer.map(randomBeer => <p>IBU: {randomBeer.ibu}</p>)
        const randomBeerFoodPairing = this.props.randomBeer.map(randomBeer => <p>Food Pairing: {randomBeer.food_pairing.join(", ")}</p>)
        return (
            <div>
                <p>
                    {randomBeer}
                    {randomBeerTag}
                    {randomBeerDescription}
                    {randomBeerBrewDate}
                    {randomBeerABV}
                    {randomBeerIBU}
                    {randomBeerFoodPairing}
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
