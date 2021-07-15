export const fetchAllBeers = () => {
  return (dispatch) => {
    fetch("https://api.punkapi.com/v2/beers")
      .then(resp => resp.json())
      .then(beers =>{
        dispatch({
          type: "GET_BEERS",
          payload: beers
        })
        console.log("from fetchAllBeers", beers)
      })
    }
}
