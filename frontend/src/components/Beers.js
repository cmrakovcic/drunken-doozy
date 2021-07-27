import React, { Component } from 'react';
import Footer from './Footer';
import BeersContainer from '../containers/BeersContainer';

class Beers extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="beers"><br></br>
                        <BeersContainer />
                    </div>
                </header>
                < Footer/>
            </div>
        );
    }
}

export default Beers;