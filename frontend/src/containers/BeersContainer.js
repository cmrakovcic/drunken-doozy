import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchAllBeers } from '../actions/beer';
import BeerCard from '../components/BeerCard';

class BeersContainer extends Component {
    
    state = {
        beers: []
    }

    componentDidMount() {
        this.props.fetchAllBeers()
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
            <div id="beer-container">
                <br></br>
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

export default connect(mapStateToProps, { fetchAllBeers })(BeersContainer);
