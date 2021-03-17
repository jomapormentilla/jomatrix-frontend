import React from 'react'
import { connect } from 'react-redux'
import { createPost } from '../../actions/postActions'

class PostForm extends React.Component {
    state = {
        description: '',
        location: '',
        image: null,
        preview: null
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        this.props.createPost(sessionStorage.accessToken, this.state)
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
            <div className="postForm">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <i className="bi-person-circle" style={{ fontSize: '30px', marginRight: '10px' }}></i>
                        <div>
                            { this.props.currentUser.first_name } { this.props.currentUser.last_name }
                            <br />
                            <span style={{ color: '#aaa' }}>Create a New Post</span>
                        </div>
                    </div>
                </div>

                <form onSubmit={ this.handleOnSubmit }>
                    { this.state.preview ? <img src={ this.state.preview } alt="uploadImage" style={{ width: '100%' }} /> : null }
                    <input type="file" name="image" accept="image/*" onChange={ this.handleImageUpload } style={{ borderTop: 'solid 1px #ddd', borderBottom: 'solid 1px #ddd', backgroundColor: '#fcfcfc' }} />
                    <input type="text" name="description" onChange={ this.handleOnChange } value={ this.state.description } placeholder="Description" />
                    <input type="text" name="location" onChange={ this.handleOnChange } value={ this.state.location } placeholder="Location" />
                    <button type="submit">Create Post</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({ currentUser: state.currentUser })

export default connect(mapStateToProps, { createPost })(PostForm)