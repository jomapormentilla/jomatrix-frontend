import React from 'react'
import { NavLink } from 'react-router-dom'

class Signup extends React.Component {
    state = {
        fname: '',
        lname: '',
        email: '',
        password: '',
        confirm: ''
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
            <div className="signup">
                <h1 className="logo" style={{ fontSize: '80px' }}>Jomatrix</h1>
                <div style={{ display: 'flex', flexDirection: 'column', color: '#fff', padding: '10px', width: '350px' }}>
                    <form onSubmit={ this.handleOnSubmit }>
                        <input type="text" name="fname" onChange={ this.handleOnChange } placeholder="First Name" />
                        <input type="text" name="lname" onChange={ this.handleOnChange } placeholder="Last Name" />
                        <input type="emailt" name="email" onChange={ this.handleOnChange } placeholder="Email" />
                        <input type="password" name="password" onChange={ this.handleOnChange } placeholder="Password" />
                        <input type="password" name="confirm" onChange={ this.handleOnChange } placeholder="Confirm Password" />
                        <button type="submit">Sign Up</button>
                    </form>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#fff', width: '350px', borderTop: 'solid 1px #fff', marginTop: '15px', padding: '15px 0px', marginBottom: '200px' }}>
                    <NavLink to="/">Already have an account? Login here</NavLink>
                </div>
            </div>
        )
    }
}

export default Signup