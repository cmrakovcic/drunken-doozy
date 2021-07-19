import React, { Component } from 'react';

class FavoritedBeerCard extends Component {
    render() {
        return (
            <div 
                id={`favorited-beer-card-${this.props.id}`}
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
                <button>Delete</button>
                <br />
            </div>
        );
    }
}

export default FavoritedBeerCard;