import React, { Component } from 'react';
import '../App.css';
import { connect } from "react-redux"
// import { destroyFavoritedBeer } from '../actions/deleteButton';
import { deleteFavoritedBeer } from '../reducers/deleteButtonReducer';

class DeleteButton extends Component {

    state = {
        favoritedBeers: []
    }

    handleDelete = (evt) => {
        this.setState({
            [evt.target.id]: evt.target.id
        })
        this.props.deleteFavoritedBeer()
    }

    render() {
        return (
            <div>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        );
    }
}

// export default DeleteButton;
// export default connect (null, { destroyFavoritedBeer })(DeleteButton);
export default connect (null, { deleteFavoritedBeer })(DeleteButton);
