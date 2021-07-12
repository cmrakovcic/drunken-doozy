export const fetchAllBeers = () => {
  return (dispatch) => {
    fetch("https://api.punkapi.com/v2/beers")
      .then(resp => resp.json())
      .then(allBeers =>{
        dispatch({
          type: "GET_BEERS",
          payload: allBeers
        })
      })
    }
}

export default fetchAllBeers;