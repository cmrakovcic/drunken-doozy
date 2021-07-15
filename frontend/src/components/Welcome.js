import React, { Component } from 'react';
import Footer from './Footer';

class Welcome extends Component {
    render() {
        return (
        <div className="App">
            <header className="App-header">
                <img src={"https://pngimg.com/uploads/beer/beer_PNG2330.png"} className="App-logo" alt="logo" />
                <h1>The Drunken Doozy</h1>
                <button>Login</button>
                <button>Signup</button>
            </header>
            < Footer/>
        </div>
        );
    }
}

export default Welcome;
