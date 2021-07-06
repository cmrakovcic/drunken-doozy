const initialState = {
    favoritedBeers: []
  }
  
const favoritedBeersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FAVORITED_BEERS":
      return {
        ...state,
        favoritedBeers: action.payload
      }
    
    case "UPDATE_FAVORITED_BEERS":
      return {
        ...state,
        favoritedBeers: action.payload
      }
      
      default:
        return state
    }
  }
  
export default favoritedBeersReducer;