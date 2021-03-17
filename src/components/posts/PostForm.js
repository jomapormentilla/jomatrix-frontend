import React from 'react'
import { connect } from 'react-redux'

class PostForm extends React.Component {
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

                <form>
                    <input type="file" />
                    <input type="text" name="newPost" placeholder="Description" />
                    <input type="text" name="newPost" placeholder="Location" />
                    <button type="submit">Create Post</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({ currentUser: state.currentUser })

export default connect(mapStateToProps)(PostForm)