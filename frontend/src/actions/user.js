export const addUserBE = () => {
    return (dispatch) => {
        fetch("http://localhost:3001/users",{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                currentUser: []
            })
        })
        .then(resp => resp.json())
        .then(user => {
            dispatch({
                type: "ADD_USER_BE",
                payload: user
            })
            console.log("from addUserBE", user)
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