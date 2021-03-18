import { uploadFile } from 'react-s3'
import { url } from './baseUrl'
import env from 'react-dotenv'

export const fetchPosts = jwt => {
    const configObj = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${ jwt }`
        }
    }

    return (dispatch) => {
        dispatch({ type: 'LOADING' })

        fetch(url + `/posts`, configObj)
        .then(res => res.json())
        .then(data => {
            dispatch({ type: 'GET_POSTS', posts: data, loading: false })
        })
    }
}

export const createPost = (jwt, data) => {
    const config = {
        bucketName: 'jomatrix',
        region: 'us-east-1',
        accessKeyId: env.AWS_ACCESS_KEY_ID,
        secretAccessKey: env.AWS_SECRET_ACCESS_KEY
    }
    debugger
    
    return dispatch => {
        dispatch({ type: 'LOADING' })

        uploadFile(data.image, config)
        .then(resFile => {
            const postInfo = {
                post: {
                    title: data.description,
                    content: resFile.location
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