export const getFavoritedBeers = () => {
  return (dispatch) => {
    fetch("http://127.0.0.1:3001/favorited_beers")
      .then(resp => resp.json())
      .then(favoritedBeers =>{
        dispatch({
          type: "GET_FAVORITED_BEERS",
          payload: favoritedBeers
        })
        console.log("from fetchFavoritedBeers", favoritedBeers)
      })
    }
}

// export const addFavoritedBeer = (favoritedBeers) => {
//   return {
//     type: "ADD_FAVORITED_BEER",
//     payload: favoritedBeers
//   }
// }