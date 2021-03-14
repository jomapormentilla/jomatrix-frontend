const url = `http://localhost:3000`

export const fetchPosts = () => {
    return (dispatch) => {
        fetch(url + `/posts`)
        .then(res => res.json())
        .then(data => {
            dispatch({ type: 'GET_POSTS', posts: data })
        })
    }
}