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
  