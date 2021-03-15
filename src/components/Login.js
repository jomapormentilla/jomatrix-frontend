import React from 'react'

class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    render(){
        return(
            <div className="login">
                <form onSubmit={ this.handleOnSubmit } style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', width: '400px', alignItems: 'center' }}>
                    <h1>JOMATRIX</h1>
                    <input type="email" name="email" placeholder="Email" onChange={ this.handleOnChange } />
                    <input type="password" name="password" placeholder="Password" onChange={ this.handleOnChange } />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login