import { uploadFile } from 'react-s3'
import env from 'react-dotenv'
import { url } from './baseUrl'

export const fetchUsers = (jwt) => {
    const configObj = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${ jwt }`
        }
    }

    return (dispatch) => {
        dispatch({ type: 'LOADING' })
        
        fetch(url + `/users`, configObj)
        .then(res => res.json())
        .then(data => {
            dispatch({ type: 'GET_USERS', users: data })
        })
    }
}

export const createUser = (data) => {
    const userInfo = {
        user: {
            first_name: data.fname,
            last_name: data.lname,
            email: data.email,
            password: data.password
        }
    }

    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(userInfo)
    }

    return (dispatch) => {
        dispatch({ type: 'LOADING' })

        fetch(url + `/users`, configObj)
        .then(res => res.json())
        .then(data => {
            if (!!data.error) {
                console.log(data.error)
            } else {
                sessionStorage.setItem('accessToken', data.jwt)
                dispatch({ type: 'CREATE_USER', user: data.user.user })
            }
        })
    }
}

export const updateUser = (jwt, data) => {
    const userInfo = {
        user: {
            first_name: data.fname,
            last_name: data.lname,
            email: data.email,
            username: data.username,
            website: data.website,
            bio: data.bio,
            gender: data.gender
        }
    }

    const configObj = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${ jwt }`
        },
        body: JSON.stringify(userInfo)
    }

    return (dispatch) => {
        dispatch({ type: 'LOADING' })

        fetch(url + `/users/` + data.id, configObj)
        .then(res => res.json())
        .then(data => {
            dispatch({ type: 'UPDATE_USER', data })
        })
    }
}

export const updateProfilePicture = (jwt, data) => {
    const config = {
        bucketName: 'jomatrix',
        region: 'us-east-1',
        accessKeyId: env.AWS_ACCESS_KEY_ID,
        secretAccessKey: env.AWS_SECRET_ACCESS_KEY
    }


    return (dispatch) => {
        dispatch({ type: 'LOADING' })

        uploadFile(data.image, config)
        .then(resFile => {
            const userInfo = {
                user: {
                    image: resFile.location
                }
            }

            const configObj = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${ jwt }`
                },
                body: JSON.stringify(userInfo)
            }

            fetch(url + `/users/` + data.id, configObj)
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'UPDATE_USER', data })
            })
        })
    }
}

export const updatePassword = (jwt, data) => {
    const userInfo = {
        user: {
            password: data.newPassword,
        },
        old_password: data.oldPassword
    }

    const configObj = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${ jwt }`,
        },
        body: JSON.stringify(userInfo)
    }

    return (dispatch) => {
        fetch(url + `/password/` + data.id, configObj)
        .then(res => res.json())
        .then(data => {
            dispatch({ type: 'UPDATE_USER', data })
        })
    }
}