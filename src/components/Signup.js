import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { createUser } from '../actions/userActions'

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
        e.target.style.backgroundColor = '#fff'
    }

    handleOnSubmit = e => {
        e.preventDefault()
        let inputs = e.target.children

        let allow = 0
        for (let input in inputs) {
            if (inputs[input].value === '' && inputs[input].type !== 'submit') {
                console.log(`${ inputs[input].placeholder } cannot be left blank.`)
                inputs[input].style.backgroundColor = "#fac7d2"
                allow++
            }
        }

        if (allow === 0 && inputs.password.value === inputs.confirm.value) {
            this.props.createUser(this.state)
        } else {
            e.target.children.confirm.style.backgroundColor = "#fac7d2"
            console.log('Confirm Password does not match.')
        }
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

export default connect(null, { createUser })(Signup)