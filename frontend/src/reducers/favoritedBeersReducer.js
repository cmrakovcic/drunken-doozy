const initialState = {
    favoritedBeers: []
  }
  
const favoritedBeersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITED_BEER":
      return {
        ...state,
        favoritedBeers: action.payload
      }
    
    case "UPDATE_FAVORITED_BEER":
      return {
        ...state,
        favoritedBeers: action.payload
      }

      default:
        return state
    }
  }
  
export default favoritedBeersReducer;