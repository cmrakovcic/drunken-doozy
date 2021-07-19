import React, { Component } from 'react';

class RandomBeerCard extends Component {
    render() {
        return (
            <div 
                id={`random-beer-card-${this.props.id}`}
                style={{
                        backgroundColor: `var(--${this.props.type})`, 
                        }}
            >
                <h3>{this.props.name}</h3>
                <p>Tagline: {this.props.tagline}</p>
                <p>ABV: {this.props.abv}%</p>
                <p>IBU: {this.props.ibu}</p>
                <p>Food Pairing: {this.props.food_pairing}</p>
                <br />
            </div>
        );
    }
}

export default RandomBeerCard;