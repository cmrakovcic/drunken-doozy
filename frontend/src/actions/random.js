export const fetchRandomBeer = () => {
  return (dispatch) => {
    fetch("https://api.punkapi.com/v2/beers/random")
      .then(resp => resp.json())
      .then(beers =>{
        dispatch({
          type: "GET_RANDOM",
          payload: beers
        })
        console.log("from fetchRandomBeer", beers)
      })
    }
}

export default fetchRandomBeer;