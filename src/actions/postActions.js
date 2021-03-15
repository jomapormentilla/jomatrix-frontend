const url = `http://localhost:3000`

export const fetchPosts = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING', loading: true })
        fetch(url + `/posts`)
        .then(res => res.json())
        .then(data => {
            dispatch({ type: 'GET_POSTS', posts: data, loading: false })
        })
    }
}