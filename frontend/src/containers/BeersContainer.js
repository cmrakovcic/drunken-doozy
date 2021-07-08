import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import BeerCard from '../components/BeerCard';
// import FavoritedBeers from '../components/FavoritedBeers';

class BeersContainer extends Component {

    componentDidMount(){
        console.log("BEERCONTAINER MOUNT")
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route>

                    </Route>
                </Switch>
            </div>
        );
    }
}

export default BeersContainer;
