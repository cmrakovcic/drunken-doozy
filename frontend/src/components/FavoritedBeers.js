import React, { Component } from 'react';
import Footer from './Footer';
import FavoritedBeersContainer from '../containers/FavoritedBeersContainer';

class FavoritedBeers extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="favorited-beers"><br></br>
                        <FavoritedBeersContainer/>
                    </div>
                </header>
                < Footer/>
            </div>
        );
    }
};

// const mapStateToProps = (state) => {
//     return {
//         favoritedBeers: state.favoritedBeers
//     }
// }

export default FavoritedBeers;