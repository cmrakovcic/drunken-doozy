const initialState = {
    beers: []
  }
  
const beersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BEERS":
      return {
        ...state,
        beers: [...action.payload]
      }

      default:
        return state
    }
  }
  
export default beersReducer;