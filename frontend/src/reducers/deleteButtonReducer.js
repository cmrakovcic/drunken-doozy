import { destroyFavoritedBeer } from '../actions/deleteButton';

const initialState = {
    favoritedBeers: [],
}

export const removeFavoritedBeer = (id) => ({
    type: "DELETE_FAVORITED_BEER", 
    payload: id
})

export const deleteFavoritedBeer = (id) => {
    return (dispatch) => {
      destroyFavoritedBeer(id)
        .then(() => dispatch(removeFavoritedBeer(id)))
    }
  }

const deleteButtonReducer = (state = initialState, action) => {
    switch(action.type){
        case "DELETE_FAVORITED_BEER":
            return {
                ...state,
                favoritedBeers: [...state.favoritedBeers.filter(favoritedBeer => favoritedBeer.id !== action.payload)]
            }
            default: 
                return state
    }
}

export default deleteButtonReducer;