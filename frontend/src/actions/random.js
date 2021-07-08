export const getRandomBeer = () => {
  return (dispatch) => {
    fetch('https://api.punkapi.com/v2/beers/random')
    .then(resp => resp.json())
    .then(getRandomBeer => {
      dispatch(getRandomBeer)
    })
  }
}