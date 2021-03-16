const url = `http://localhost:3000`

export const fetchUsers = (jwt) => {
    const configObj = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${ jwt }`
        }
    }

    return (dispatch) => {
        dispatch({ type: 'LOADING', loading: true })
        fetch(url + `/users`, configObj)
        .then(res => res.json())
        .then(data => {
            dispatch({ type: 'GET_USERS', users: data })
        })
    }
}