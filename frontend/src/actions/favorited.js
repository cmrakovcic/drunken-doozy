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

export const fetchPostFavoritedBeers = (beer) => {
  return (dispatch) => {
    fetch('http://localhost:3001/favorited_beers', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
          body: JSON.stringify({
              favorited_beers: beer
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

export const deleteFavoritedBeer = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/favorited_beers/${id}`, {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id
      }),
    })
    .then(resp => resp.json())
    .then(favoritedBeers =>{
      dispatch({
        type: "DELETE_FAVORITED_BEER",
        payload: favoritedBeers
      })
      console.log("from deleteFavoritedBeers", favoritedBeers)
    })
  }
}