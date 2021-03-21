import React from 'react'
import { connect } from 'react-redux'
import { updateProfilePicture } from '../../actions/userActions'

import Loading from '../Loading'

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

    currentImage = () => {
        if (!!this.props.currentUser.image) {
            return <img src={ this.props.currentUser.image } alt={`profile`} className="profileImage" />
        } else {
            return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', border: 'solid 1px #aaa', backgroundColor: '#f7f7f7'}}>{ this.props.loading ? <Loading /> : 'Select an image to upload' }</div>
        }
    }

    renderButton = () => {
        if (!!this.props.currentUser.image || !!this.state.image) {
            return <button type="submit" style={{ marginTop: '10px' }}>{ !!this.state.image ? 'Upload Image' : 'Remove Image' }</button>
        } else {
            return <button type="submit" style={{ marginTop: '10px' }} disabled>Select Image</button>
        }
    }

    render(){
        return(
            <div className="profilePicture" style={{ padding: '10px', width: '100%' }}>
                { !this.state.preview ? this.currentImage() : null }
                <div>
                    <form onSubmit={ this.handleOnSubmit }>
                        { this.state.preview ? <img src={ this.state.preview } alt="uploadImage" style={{ width: '100%' }} /> : null }
                        <input type="file" name="image" accept="image/*" onChange={ this.handleImageUpload } style={{ borderTop: 'solid 1px #ddd', borderBottom: 'solid 1px #ddd', backgroundColor: '#fcfcfc', marginTop: '10px' }} />
                        { this.renderButton() }
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ loading: state.loading })

export default connect(mapStateToProps, { updateProfilePicture })(ProfilePicture)