const baseUrl = "http://localhost:3001/favorited_beers"

// export const deleteFavoritedBeer = () => {
//     return (dispatch) => {
//       fetch('http://localhost:3001/favorited_beers/:id', {
//         method: 'DELETE',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//             body: JSON.stringify({
//                 favoritedBeers: []
//             }),
//         })
//         .then(resp => resp.json())
//         .then(favoritedBeers => {
//           dispatch({
//             type: "DELETE_FAVORITED_BEER",
//             payload: favoritedBeers
//           })
//           console.log("from deleteFavoritedBeers", favoritedBeers)
//         })
//     }
//   }

// export const deleteFavoritedBeer = (id) => {
//   return (dispatch) => {
//     fetch(`${baseUrl}/${id}`, {
//       method: "DELETE",
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//     })
//     .then(resp => resp.json())
//     .then(favoritedBeers =>{
//       dispatch({
//         type: "DELETE_FAVORITED_BEER",
//         payload: favoritedBeers
//       })
//       console.log("from deleteFavoritedBeers", favoritedBeers)
//     })
//   }
// }

export const destroyFavoritedBeer = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
  