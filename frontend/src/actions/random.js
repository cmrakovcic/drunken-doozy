export const fetchRandomBeer = () => {
  return (dispatch) => {
    fetch("https://api.punkapi.com/v2/beers/random")
      .then(resp => resp.json())
      .then(randomBeer =>{
        dispatch({
          type: "GET_RANDOM",
          payload: randomBeer
        })
        console.log("from fetchRandomBeer", randomBeer)
      })
    }
}

export default fetchRandomBeer;