const url = `http://localhost:3000`

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
        fetch(url + `/login`, configObj)
        .then(res => res.json())
        .then(data => {
            if (!!data.error) {
                alert('Invalid Credentials')
            } else {
                dispatch({ type: 'LOGIN_USER', loggedIn: true, jwt: data.jwt, data })
            }
        })
    }
}