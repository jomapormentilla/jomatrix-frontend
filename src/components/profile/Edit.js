import React from 'react'
import { connect } from 'react-redux'

class Edit extends React.Component {
    state = {
        id: '',
        fname: '',
        lname: '',
        email: '',
        username: '',
        website: '',
        bio: '',
        gender: ''
    }

    componentDidMount(){
        this.setState({
            id: this.props.currentUser.id,
            fname: this.props.currentUser.first_name,
            lname: this.props.currentUser.last_name,
            email: this.props.currentUser.email,
            username: this.props.currentUser.username,
            website: this.props.currentUser.website,
            bio: this.props.currentUser.bio,
            gender: this.props.currentUser.gender,
        })
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
            <div className="profileEdit" style={{ padding: '10px' }}>
                <h1 style={{ textAlign: 'center' }}><i className="bi-person-circle"></i> &nbsp; { this.props.currentUser.username }</h1>
                <form onSubmit={ this.handleOnSubmit }>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" name="fname" value={ this.state.fname } onChange={ this.handleOnChange } />

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" name="lname" value={ this.state.lname } onChange={ this.handleOnChange } />

                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={ this.state.email } onChange={ this.handleOnChange } />
                    
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

const mapStateToProps = state => ({ currentUser: state.currentUser })

export default connect(mapStateToProps)(Edit)