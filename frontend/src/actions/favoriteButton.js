// export const addFavoritedBeer = (favoritedBeers) => {
//   return {
//     type: "ADD_FAVORITED_BEER",
//     payload: favoritedBeers
//   }
// }

export const fetchPostFavoritedBeers = () => {
    return (dispatch) => {
      fetch('http://localhost:3001/favorited_beers', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
            body: JSON.stringify({
                favoritedBeers: []
            }),
        })
        .then(resp => resp.json())
        .then(favoritedBeers => {
          dispatch({
            type: "POST_FAVORITED_BEERS",
            payload: favoritedBeers
          })
          console.log("from fetchPostFavoritedBeers", favoritedBeers)
        })
    }
  }