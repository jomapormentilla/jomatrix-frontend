import React from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../../actions/commentActions'

import Comment from './Comment'
import CommentForm from './CommentForm'

class CommentsContainer extends React.Component {
    componentDidMount(){
        this.props.fetchComments()
    }

    author = id => {
        return this.props.users.find(user => user.id === id )
    }

    renderComments = () => {
        let filteredComments = this.props.comments.filter(comment => comment.commentable_id === this.props.postId && comment.commentable_type === "Post" )
        return filteredComments.map(comment => <Comment key={ comment.id } comment={ comment } author={ this.author(comment.user_id) } />)
    }

    render(){
        return(
            <div className="commentsContainer">
                <div style={{ padding: '0px 10px' }}>
                    <span style={{ color: '#aaa' }}>View Comments</span>
                    { this.renderComments() }
                </div>
                <CommentForm />
            </div>
        )
    }
}

const mapStateToProps = state => ({ comments: state.comments, users: state.users })

export default connect(mapStateToProps, { fetchComments })(CommentsContainer)