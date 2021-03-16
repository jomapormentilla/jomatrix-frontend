import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions/loginActions'

class Login extends React.Component {
    state = {
        email: 'jomapormentilla@gmail.com',
        password: 'Teamstinga77.'
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        this.props.login(this.state)
    }

    render(){
        return(
            <div className="login">
                <form onSubmit={ this.handleOnSubmit } style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', width: '350px', alignItems: 'center' }}>
                    <h1 className="logo" style={{ fontSize: '80px' }}>Jomatrix</h1>
                    <input type="email" name="email" value={ this.state.email } placeholder="Email" onChange={ this.handleOnChange } />
                    <input type="password" name="password" value={ this.state.password } placeholder="Password" onChange={ this.handleOnChange } />
                    <button type="submit">Login</button>
                </form>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#fff', width: '350px', borderTop: 'solid 1px #fff', marginTop: '15px', padding: '15px 0px', borderBottom: 'solid 1px #fff', marginBottom: '15px' }}>
                    <button className="loginGoogle">
                        Login with Google
                    </button>
                </div>

                <div className="signupLink" style={{ marginBottom: '200px' }}>
                    <NavLink to="/signup">Sign up for an account</NavLink>
                </div>
            </div>
        )
    }
}

export default connect(null, { login })(Login)