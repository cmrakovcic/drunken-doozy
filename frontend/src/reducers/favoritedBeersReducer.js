const initialState = {
    favoritedBeers: []
  }
  
const favoritedBeersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FAVORITED_BEERS":
      return {
        ...state,
        favoritedBeers: [...action.payload]
      }

    default:
      return state
    }
  }
  
export default favoritedBeersReducer;