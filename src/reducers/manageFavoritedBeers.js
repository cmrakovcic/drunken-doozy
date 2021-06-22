export default function manageFavoritedBeers(state = {
    favoritedBeers: [],
  }, action) {
    switch(action.type){
      case "ADD_BEER":
        return {
          favoritedBeers: state.favoritedBeers.concat(action.payload)
        }
      default:
        return state
    }
  };