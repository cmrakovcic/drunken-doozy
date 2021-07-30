const initialState = {
    favoritedBeers: [],
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