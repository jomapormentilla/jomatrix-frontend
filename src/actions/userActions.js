import { url } from './baseUrl'

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
        dispatch({ type: 'LOADING', loading: true })

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