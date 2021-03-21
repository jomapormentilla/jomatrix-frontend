import React from 'react'
import { connect } from 'react-redux'
import { updatePassword } from '../../actions/userActions'

class ProfilePassword extends React.Component {
    state = {
        id: '',
        oldPassword: '',
        newPassword: '',
        confirm: ''
    }

    componentDidMount(){
        this.setState({
            id: this.props.currentUser.id
        })
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        this.props.updatePassword(sessionStorage.accessToken, this.state)
        this.setState({
            id: '',
            oldPassword: '',
            newPassword: '',
            confirm: ''
        })
    }

    renderButton = () => {
        if (this.state.newPassword === this.state.confirm && this.state.newPassword !== '' && this.state.oldPassword !== '') {
            return <button type="submit">Update Password</button>
        } else {
            return <button type="submit" disabled>Update Password</button>
        }
    }

    render(){
        return(
            <div className="profilePassword" style={{ padding: '10px' }}>
                <form onSubmit={ this.handleOnSubmit }>
                    <label htmlFor="oldPassword">Old Password</label>
                    <input type="password" name="oldPassword" value={ this.state.oldPassword } onChange={ this.handleOnChange } />
                    
                    <label htmlFor="newPassword">New Password</label>
                    <input type="password" name="newPassword" value={ this.state.newPassword } onChange={ this.handleOnChange } />
                    
                    <label htmlFor="confirm">Confirm New Password</label>
                    <input type="password" name="confirm" value={ this.state.confirm } onChange={ this.handleOnChange } />

                    { this.renderButton() }
                </form>
            </div>
        )
    }
}

export default connect(null, { updatePassword })(ProfilePassword)