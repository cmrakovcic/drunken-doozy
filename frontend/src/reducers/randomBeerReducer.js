const initialState = {
    randomBeer: []
  }
  
const randomBeerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RANDOM":
      return {
        ...state,
        randomBeer: [...action.payload]
      }

      default:
        return state
    }
  }
  
export default randomBeerReducer;