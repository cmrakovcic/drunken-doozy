export const getBeers = () => {
    return (dispatch) => {
      dispatch({type: "LOADING"})
      fetch("https://api.punkapi.com/v2/beers")
      .then(resp => resp.json())
      .then(beers =>{
        dispatch({
          type: "GET_BEERS",
          payload: beers
        })
      })
    }
}