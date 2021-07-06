import React from 'react'
import { connect } from 'react-redux'
import { updateUser } from '../../actions/userActions'

class ProfileEdit extends React.Component {
    state = {
        id: this.props.currentUser.id || '',
        fname: this.props.currentUser.first_name || '',
        lname: this.props.currentUser.last_name || '',
        email: this.props.currentUser.email || '',
        username: this.props.currentUser.username || '',
        website: this.props.currentUser.website || '',
        bio: this.props.currentUser.bio || '',
        gender: this.props.currentUser.gender || ''
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        this.props.updateUser(sessionStorage.accessToken, this.state)
    }

    render(){
        return(
            <div className="profileEdit" style={{ padding: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' }}>
                    { !!this.props.currentUser.image ? <div className="profileImageContainer"><img src={ this.props.currentUser.image } alt={`profile`} className="profileImage" /></div> : <i className="bi-person-circle" style={{ marginRight: '10px', fontSize: '40px', alignSelf: 'flex-start' }}></i> }
                    <h1>{ this.props.currentUser.username }</h1>
                </div>
                <form onSubmit={ this.handleOnSubmit }>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" name="fname" value={ this.state.fname } onChange={ this.handleOnChange } />

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" name="lname" value={ this.state.lname } onChange={ this.handleOnChange } />

                    <label htmlFor="email">Email</label>
                    { this.props.currentUser.id === 16 ? <div><input disabled value="Test User cannot change this field." /></div> : <input type="text" name="email" value={ this.state.email } onChange={ this.handleOnChange } />}
                    
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" value={ this.state.username } onChange={ this.handleOnChange } />

                    <label htmlFor="website">Website</label>
                    <input type="text" name="website" value={ this.state.website } onChange={ this.handleOnChange } />

                    <label htmlFor="bio">Bio</label>
                    <input type="text" name="bio" value={ this.state.bio } onChange={ this.handleOnChange } />
                    
                    <label htmlFor="gender">Gender</label>
                    <input type="text" name="gender" value={ this.state.gender } onChange={ this.handleOnChange } />

                    <button type="submit">Save Changes</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { updateUser })(ProfileEdit)