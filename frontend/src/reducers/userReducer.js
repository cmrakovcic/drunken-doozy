const initialState = {
    user: []
  }
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_USER":
        return {
          ...state,
          newUser: [action.payload]
        }

      case "ADD_USER_BE":
        return {
          ...state,
          user: [action.payload]
        }
      case "CLEAR_USER":
        return {
          ...state,
          user: []
        }
      default:
        return state
    }
  }
  
  export default userReducer;