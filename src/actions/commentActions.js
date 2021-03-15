const url = `http://localhost:3000`

export const fetchComments = () => {
    return (dispatch) => {
        fetch(url + `/comments`)
        .then(res => res.json())
        .then(json => {
            dispatch({ type: 'GET_COMMENTS', comments: json })
        })
    }
}