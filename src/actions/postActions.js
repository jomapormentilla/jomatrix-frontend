import { uploadFile } from 'react-s3'
import env from 'react-dotenv'
import { url } from './baseUrl'

export const fetchPosts = (jwt, page) => {
    const configObj = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${ jwt }`
        }
    }

    return (dispatch) => {
        if (page === 0) {
            dispatch({ type: 'LOADING' })
        }

        fetch(url + `/posts?page=` + page, configObj)
        .then(res => res.json())
        .then(data => {
            if (page === 0) {
                dispatch({ type: 'GET_POSTS', posts: data })
            } else {
                if (data.length !== 0) {
                    dispatch({ type: 'MORE_POSTS', posts: data })
                } else {
                    dispatch({ type: 'STOP_INFINITE_SCROLL' })
                }
            }
        })
    }
}

export const fetchAllPosts = (jwt) => {
    const configObj = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${ jwt }`
        }
    }

    return (dispatch) => {
        dispatch({ type: 'LOADING' })

        fetch(url + '/posts', configObj)
        .then(res => res.json())
        .then(data => {
            dispatch({ type: 'GET_POSTS', posts: data })
        })
    }
}

export const createPost = (jwt, data) => {
    const config = {
        bucketName: 'jomatrix',
        region: 'us-east-1',
        accessKeyId: env.AWS_ACCESS_KEY_ID_NETLIFY,
        secretAccessKey: env.AWS_SECRET_ACCESS_KEY_NETLIFY
    }
    
    return dispatch => {
        dispatch({ type: 'LOADING' })

        uploadFile(data.image, config)
        .then(resFile => {
            const postInfo = {
                post: {
                    title: data.description,
                    content: resFile.location,
                    location: data.location
                }
            }
        
            const configObj = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${ jwt }`
                },
                body: JSON.stringify(postInfo)
            }
    
            fetch(url + `/posts`, configObj)
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'CREATE_POST', data })
            })
        })
    }
}

export const likePost = (jwt, id) => {
    const likeInfo = {
        like: {
            likeable_type: 'Post',
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
            dispatch({ type: 'LIKE_POST', data })
        })
    }
}

export const unlikePost = (jwt, id) => {
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
            dispatch({ type: 'LIKE_POST', data })
        })
    }
}

export const deletePost = (jwt, id) => {
    const configObj = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${ jwt }`
        }
    }

    return (dispatch) => {
        fetch(url + `/posts/` + id, configObj)
        .then(res => res.json())
        .then(data => {
            dispatch({ type: 'DELETE_POST', data })
            console.log(data)
        })
    }
}