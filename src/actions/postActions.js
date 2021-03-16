const url = `http://localhost:3000`

export const fetchPosts = jwt => {
    const configObj = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${ jwt }`
        }
    }

    return (dispatch) => {
        dispatch({ type: 'LOADING', loading: true })
        fetch(url + `/posts`, configObj)
        .then(res => res.json())
        .then(data => {
            dispatch({ type: 'GET_POSTS', posts: data, loading: false })
        })
    }
}