import React, { Component } from 'react'
import { connect } from "react-redux"
import Beers from './Beers'
class BeerList extends Component {
    state = {
        beers: []
    }

    render() {
        const beers = this.props.beers.map(beers => <Beers beers={beers} />)
        return (
            <div>
                {beers}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        beers: state.beers
    }
}

export default connect(mapStateToProps)(BeerList);
