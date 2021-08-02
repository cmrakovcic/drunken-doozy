import React, { Component } from 'react';
import FavoriteButton from './FavoriteButton';

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
                <p>ABV: {this.props.abv}%</p>
                <p>IBU: {this.props.ibu}</p>
                <p>Food Pairing: {this.props.food_pairing}</p>
                < FavoriteButton
                    key={this.props.id}
                    id={this.props.id}
                    name={this.props.name}
                    abv={this.props.abv}
                    ibu={this.props.ibu}
                    food_pairing={this.props.food_pairing}
                    tagline={this.props.tagline}/>
                <br />
            </div>
        );
    }
}

export default BeerCard;
