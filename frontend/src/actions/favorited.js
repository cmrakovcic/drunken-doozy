export const getFavoritedBeers = () => {
  return (dispatch) => {
    fetch(`http://127.0.0.1:3001/favorited-beers`)
    .then(resp => resp.json())
    .then(favoritedBeers => {
      dispatch(addFavoritedBeer(favoritedBeers))
    })
  }
}
  
export const addFavoritedBeer = (favoritedBeers) => {
  return {
    type: "ADD_FAVORITED_BEER",
    payload: favoritedBeers
  }
}