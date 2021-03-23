import React from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../../actions/postActions'

class PostMenu extends React.Component {
    handleOnClick = () => {
        this.props.deletePost(sessionStorage.accessToken, this.props.post.id)
        this.props.toggleModal()
    }

    render(){
        return(
            <div className="postMenu" style={{ textAlign: 'center', height: 'fit-content' }}>
                <div style={{ color: 'red', cursor: 'pointer' }} onClick={ this.handleOnClick }>DELETE</div>
                <div style={{ cursor: 'pointer' }} onClick={ () => {this.props.toggleModal()} }>CANCEL</div>
            </div>
        )
    }
}

export default connect(null, { deletePost })(PostMenu)