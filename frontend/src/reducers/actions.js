export const addUserBE = (email) => {
  console.log("from addUserBE", email)
  return (dispatch) => {
    fetch("http://127.0.0.1:3001/users",{
      method:'POST',
      headers: {
        'Content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        email: email
      })
    })
    .then(resp => resp.json())
    .then(user => {
      dispatch(addUser(user))
    })
  }
 }

export const addUser = (newUser) => {
  return {
      type: "ADD_USER",
      payload: newUser
    }
}

export const removeUser = () => {
  return {
    type: "CLEAR_USER"
  }
}

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

export const getFavoritedBeers = () => {
  return (dispatch) => {
    fetch(`http://127.0.0.1:3001/favorited_beers`)
    .then(resp => resp.json())
    .then(favoritedBeers => {
      dispatch(setFavoritedBeer(favoritedBeers))
    })
  } 
}

export const setFavoritedBeer = (favoritedBeers) => {
  return {
    type: "SET_FAVORITED_BEERS",
    payload: favoritedBeers
  }
}

export const getRandomBeer = () => {
  return (dispatch) => {
    fetch('https://api.punkapi.com/v2/beers/random')
    .then(resp => resp.json())
    .then(getRandomBeer => {
      dispatch(getRandomBeer)
    })
  }
}