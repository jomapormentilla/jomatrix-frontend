import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { createUser } from '../actions/userActions'

import Loading from '../components/Loading'

class Signup extends React.Component {
    state = {
        fname: '',
        lname: '',
        email: '',
        password: '',
        confirm: '',
        test: false
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

    handleOnClick = e => {
        this.setState(prevState => ({
            ...prevState,
            test: !prevState.test
        }))
    }

    render(){
        return(
            <div className="signup">
                <h1 className="logo" style={{ fontSize: '80px' }}>Jomatrix</h1>
                { this.props.loading ? <Loading /> : 
                <div style={{ display: 'flex', flexDirection: 'column', color: '#fff', padding: '10px', width: '350px' }}>
                    {/* <form onSubmit={ this.handleOnSubmit }>
                        <input type="text" name="fname" onChange={ this.handleOnChange } placeholder="First Name" />
                        <input type="text" name="lname" onChange={ this.handleOnChange } placeholder="Last Name" />
                        <input type="emailt" name="email" onChange={ this.handleOnChange } placeholder="Email" />
                        <input type="password" name="password" onChange={ this.handleOnChange } placeholder="Password" />
                        <input type="password" name="confirm" onChange={ this.handleOnChange } placeholder="Confirm Password" />
                        <button type="submit">Sign Up</button>
                    </form> */}

                    <div style={{ background: "#fff", color: "#000", padding: '10px 15px' }}>
                        <h2 style={{ textAlign: 'center' }}>Thanks for visitng Jomatrix!</h2>
                        <h3>Unforunately, due to limitations on Heroku, the Postgres database no longer supports new users. However, if you would like to login and take a look around, you can use the following credentials:</h3>
                        <div style={{ fontFamily: 'courier', fontSize: '15px' }}>
                            <p>Username: <strong style={{ color: `rgb(27, 10, 94)`}}>testuser@email.com</strong></p>
                            <p>Password: <strong style={{ color: `rgb(27, 10, 94)`}} onClick={ this.handleOnClick }>{ !!this.state.test ? `password123` : `***********` }</strong></p>
                        </div>
                    </div>
                </div>
                }

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#fff', width: '350px', borderTop: 'solid 1px #fff', marginTop: '15px', padding: '15px 0px', marginBottom: '200px' }}>
                    <NavLink to="/">Already have an account? Login here</NavLink>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ loading: state.loading })

export default connect(mapStateToProps, { createUser })(Signup)