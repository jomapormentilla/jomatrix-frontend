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

export const createComment = (jwt, data) => {
    const commentInfo = {
        comment: {
            content: data.content,
            commentable_type: data.type,
            commentable_id: data.id
        }
    }

    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${ jwt }`
        },
        body: JSON.stringify(commentInfo)
    }

    return (dispatch) => {
        fetch(url + `/comments`, configObj)
        .then(res => res.json())
        .then(data => {
            dispatch({ type: 'CREATE_COMMENT', data })
        })
    }
}

export const likeComment = (jwt, id) => {
    const likeInfo = {
        like: {
            likeable_type: 'Comment',
            likeable_id: id
        }
    }

    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${ jwt }`
        },
        body: JSON.stringify(likeInfo)
    }

    return (dispatch) => {
        fetch(url + `/likes`, configObj)
        .then(res => res.json())
        .then(data => {
            dispatch({ type: 'LIKE_COMMENT', data })
        })
    }
}

export const unlikeComment = (jwt, id) => {
    const configObj = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${ jwt }`
        }
    }

    return (dispatch) => {
        fetch(url + `/likes/` + id, configObj)
        .then(res => res.json())
        .then(data => {
            dispatch({ type: 'LIKE_COMMENT', data })
        })
    }
}