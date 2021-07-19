const initialState = {
    favoritedBeers: [],
}

const favoriteButtonReducer = (state = initialState, action) => {
    switch(action.type){
        case "POST_FAVORITED_BEERS":
            return {
                ...state,
                // favoritedBeers: [...state.favoritedBeers, action.payload]
                favoritedBeers: [...action.payload]
            }
            default: 
                return state
    }
}

export default favoriteButtonReducer;