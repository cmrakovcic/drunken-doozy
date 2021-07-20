const initialState = {
    favoritedBeer: [],
}

const deleteButtonReducer = (state = initialState, action) => {
    switch(action.type){
        case "DELETE_FAVORITED_BEER":
            return {
                ...state,
                // favoritedBeer: [...state.favoritedBeer, action.payload]
                favoritedBeer: [action.payload]
            }
            default: 
                return state
    }
}

export default deleteButtonReducer;