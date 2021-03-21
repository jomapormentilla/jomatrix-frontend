import React from 'react'
import { connect } from 'react-redux'
import { updateProfilePicture } from '../../actions/userActions'

class ProfilePicture extends React.Component {
    state = {
        id: '',
        image: null,
        preview: null
    }

    componentDidMount(){
        this.setState({
            id: this.props.currentUser.id
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        this.props.updateProfilePicture(sessionStorage.accessToken, this.state)
        
        this.setState({
            id: '',
            image: null,
            preview: null
        })
    }

    handleImageUpload = e => {
        e.persist()
        if (e.target.files && e.target.files[0]) {
            this.setState({
                image: e.target.files[0],
                preview: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    render(){
        return(
            <div className="profilePicture" style={{ padding: '10px', width: '100%' }}>
                <div>
                    <form onSubmit={ this.handleOnSubmit }>
                        { this.state.preview ? <img src={ this.state.preview } alt="uploadImage" style={{ width: '100%' }} /> : null }
                        <input type="file" name="image" accept="image/*" onChange={ this.handleImageUpload } style={{ borderTop: 'solid 1px #ddd', borderBottom: 'solid 1px #ddd', backgroundColor: '#fcfcfc' }} />
                        <button type="submit" style={{ marginTop: '10px' }}>Save</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, { updateProfilePicture })(ProfilePicture)