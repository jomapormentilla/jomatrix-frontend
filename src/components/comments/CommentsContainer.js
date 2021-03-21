import React from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../../actions/commentActions'

import Modal from '../Modal'
import CommentList from './CommentList'
import CommentForm from './CommentForm'

class CommentsContainer extends React.Component {
    state = {
        modal: false
    }

    comments = () => {
        return this.props.comments.filter(comment => comment.commentable_id === this.props.post.id && comment.commentable_type === "Post" )
    }

    toggleModal = e => {
        this.setState(prevState => ({ 
            modal: !prevState.modal
         }))
    }

    render(){
        return(
            <div className="commentsContainer">
                { !!this.state.modal ? <Modal toggleModal={ this.toggleModal } component={ <CommentList comments={ this.comments() } users={ this.props.users } post={ this.props.post } />} /> : null }
                <div style={{ padding: '10px' }}>
                    <span onClick={ this.toggleModal } style={{ color: '#777', cursor: 'pointer' }}>View { this.comments().length } Comments</span>
                </div>
                <CommentForm post={ this.props.post } />
            </div>
        )
    }
}

const mapStateToProps = state => ({ comments: state.comments, users: state.users, token: state.token })

export default connect(mapStateToProps, { fetchComments })(CommentsContainer)