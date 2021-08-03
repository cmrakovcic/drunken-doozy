const initialState = {
  favoritedBeers: []
}

const favoritedBeersReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_FAVORITED_BEERS": {
            return {
                ...state,
                favoritedBeers: [...action.payload]
            }}
        case "POST_FAVORITED_BEERS":
            return {
                ...state,
                favoritedBeers: [action.payload]
                }
        case "DELETE_FAVORITED_BEER": {
            return {
                ...state,
                favoritedBeers: [...state.favoritedBeers.filter(beer => beer.id !== action.payload.id)]
            }}
        default: 
            return state
        }
    }

export default favoritedBeersReducer;