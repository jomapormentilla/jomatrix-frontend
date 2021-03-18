import { url } from './baseUrl'

export const autoLogin = () => {
    return (dispatch) => {
        const token = sessionStorage.accessToken
        const configObj = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${ token }`
            }
        }
        
        if (token) {
            fetch(url + `/profile`, configObj)
            .then(res => res.json())
            .then(data => {
                if (!!data.error) {
                    sessionStorage.removeItem('accessToken')
                } else {
                    dispatch({ type: 'LOGIN_USER', loggedIn: true, data: data.user.user })
                }
            })
        }
    }
}

export const login = data => {
    const loginObj = {
        user: {
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
        body: JSON.stringify(loginObj)
    }

    return (dispatch) => {
        dispatch({ type: 'LOADING' })

        fetch(url + `/login`, configObj)
        .then(res => res.json())
        .then(data => {
            if (!!data.error) {
                alert('Invalid Credentials')
            } else {
                sessionStorage.setItem('accessToken', data.jwt)
                dispatch({ type: 'LOGIN_USER', loggedIn: true, data: data.data })
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch({ type: 'LOGOUT_USER' })
    }
}