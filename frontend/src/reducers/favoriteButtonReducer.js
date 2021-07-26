const initialState = {
    favoritedBeers: []
}

const favoriteButtonReducer = (state = initialState, action) => {
    switch(action.type){
        case "POST_FAVORITED_BEERS":
            return {
                ...state,
                // favoritedBeers: [...state.favoritedBeers, action.payload]
                favoritedBeers: [action.payload]
            }
            default: 
                return state
    }
}

export default favoriteButtonReducer;
// import uuid from 'uuid';

// const initialState = {
//     favoritedBeers: []
// }

// export default function favoriteButtonReducer(state = initialState, action) {
//     switch (action.type){
//         case 'ADD_FAVORITED_BEER':
//             const favoritedBeer = {
//                 id: uuid(),
//                 payload: action.payload
//             }
//             return { favoritedBeers: state.favoritedBeers.concat(favoritedBeer) };

//         case 'POST_FAVORITED_BEERS':
//             return {
//                 ...state,
//                 favoritedBeers: [action.payload]
//             }

//         default:
//             return state;
//         }
//     }
            
    //     case 'DELETE_FAVORITED_BEER':
    //         return { favoritedBeers: state.favoritedBeers.filter(favoritedBeer => favoritedBeer.id !== action.id) };
  