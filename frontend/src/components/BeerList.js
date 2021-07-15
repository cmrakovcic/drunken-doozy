import React, { Component } from 'react';
import { connect } from "react-redux";
// import Beer from './Beer';
class BeerList extends Component {
    state = {
        beers: []
    }

    render() {
        const beers = this.props.beers.map(beer => <h1>{beer.name}</h1>)
        // console.log("beers")
        return (
            <div>
                {beers }
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
