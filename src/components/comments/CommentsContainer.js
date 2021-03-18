import React from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../../actions/commentActions'

import Modal from '../Modal'
import Comment from './Comment'
import CommentForm from './CommentForm'

class CommentsContainer extends React.Component {
    state = {
        modal: false
    }

    componentDidMount(){
        this.props.fetchComments(sessionStorage.accessToken)
    }

    author = id => {
        return this.props.users.find(user => user.id === id )
    }

    comments = () => {
        return this.props.comments.filter(comment => comment.commentable_id === this.props.post.id && comment.commentable_type === "Post" )
    }

    renderComments = () => {
        return this.comments().length > 0 ? this.comments().map(comment => <Comment key={ comment.id } comment={ comment } author={ this.author(comment.user_id) } />) : <h1>No Comments</h1>
    }

    toggleModal = e => {
        this.setState(prevState => ({ 
            modal: !prevState.modal
         }), ()=>console.log(this.state))
    }

    render(){
        return(
            <div className="commentsContainer">
                { !!this.state.modal ? <Modal toggleModal={ this.toggleModal } /> : null }
                <div style={{ padding: '10px' }}>
                    <span onClick={ this.toggleModal } style={{ color: '#777' }}>View { this.comments().length } Comments</span>
                </div>
                <CommentForm post={ this.props.post } />
            </div>
        )
    }
}

const mapStateToProps = state => ({ comments: state.comments, users: state.users, token: state.token })

export default connect(mapStateToProps, { fetchComments })(CommentsContainer)