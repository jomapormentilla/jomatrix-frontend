import { url } from './baseUrl'

export const fetchComments = (jwt) => {
    const configObj = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${ jwt }`
        }
    }
    
    return (dispatch) => {
        fetch(url + `/comments`, configObj)
        .then(res => res.json())
        .then(json => {
            dispatch({ type: 'GET_COMMENTS', comments: json })
        })
    }
}