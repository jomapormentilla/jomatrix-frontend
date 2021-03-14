const url = `http://localhost:3000`

export const fetchUsers = () => {
    return (dispatch) => {
        fetch(url + `/users`)
        .then(res => res.json())
        .then(json => {
            dispatch({ type: 'GET_USERS', users: json })
        })
    }
}