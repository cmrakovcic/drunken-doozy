import React, { Component } from 'react';

class BeerCard extends Component {
    render() {
        return (
            <div 
                id={`beer-card-${this.props.id}`}
                className="card"
                style={{
                        backgroundColor: `var(--${this.props.type})`, 
                        }}
            >
                <h3>{this.props.name}</h3>
                <p>Tagline: {this.props.tagline}</p>
                <p>ABV: {this.props.abv}</p>
                <p>IBU: {this.props.ibu}</p>
                <p>Food Pairing: {this.props.food_pairing}</p>
                <button>Favorite</button>
                {/* <button onClick={(e) => this.props.addPokemon(this.props.id)} >
                    {this.caughtPokemon() ? "Remove From Team" : "Add To Team"}
                </button> */}
                <br />
            </div>
        );
    }
}

export default BeerCard;
