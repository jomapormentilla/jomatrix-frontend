import React from 'react'
import { connect } from 'react-redux'
import { likePost } from '../../actions/postActions'

import PostHeader from './PostHeader'
import PostContent from './PostContent'
import PostFooter from './PostFooter'
import CommentsContainer from '../comments/CommentsContainer'

class Post extends React.Component {
    handleLikePost = (e, postId) => {
        this.props.likePost(sessionStorage.accessToken, postId)
    }

    render(){
        return(
            <div className="post">
                <PostHeader post={ this.props.post } author={ this.props.author } />
                <PostContent post={ this.props.post } handleLikePost={ this.handleLikePost } />
                <PostFooter post={ this.props.post } author={ this.props.author } handleLikePost={ this.handleLikePost } currentUser={ this.props.currentUser } />
                
                <CommentsContainer postId={ this.props.post.id } />
            </div>
        )
    }
}

export default connect(null, { likePost })(Post)