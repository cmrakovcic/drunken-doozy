import React, { Component } from 'react';
import { connect } from "react-redux";
import BeerCard from './BeerCard';

class BeerList extends Component {
    state = {
        beers: []
    }

    render() {
        const beers = this.props.beers.map(beer => (
            < BeerCard
                key={beer.id}
                id={beer.id}
                name={beer.name}
                abv={beer.abv}
                ibu={beer.ibu}
                food_pairing={beer.food_pairing.join(", ")} 
                tagline={beer.tagline}/>
        ))        
        return (
            <div>
                {beers}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        beers: state.beersReducer.beers
    }
}

export default connect(mapStateToProps)(BeerList);
