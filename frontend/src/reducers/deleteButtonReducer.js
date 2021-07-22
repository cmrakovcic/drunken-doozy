const initialState = {
    favoritedBeers: [],
}

const deleteButtonReducer = (state = initialState, action) => {
    switch(action.type){
        case "DELETE_FAVORITED_BEER":
            return {
                // ...state,
                // favoritedBeer: [...state.favoritedBeer, action.payload]
                favoritedBeers: [...state.favoritedBeers.filter(favoritedBeer => favoritedBeer !== action.payload)]
            }
            default: 
                return state
    }
}

export default deleteButtonReducer;