import React from 'react'
import { connect } from 'react-redux'
import { likePost, unlikePost } from '../../actions/postActions'

import PostHeader from './PostHeader'
import PostContent from './PostContent'
import PostFooter from './PostFooter'
import CommentsContainer from '../comments/CommentsContainer'

class Post extends React.Component {
    handleLikePost = (e, postId) => {
        this.props.likePost(sessionStorage.accessToken, postId)
    }

    handleUnlikePost = (e, postId) => {
        this.props.unlikePost(sessionStorage.accessToken, postId)
    }

    render(){
        return(
            <div className="post">
                <PostHeader post={ this.props.post } author={ this.props.author } currentUser={ this.props.currentUser } />
                <PostContent post={ this.props.post } handleLikePost={ this.handleLikePost } handleUnlikePost={ this.handleUnlikePost } currentUser={ this.props.currentUser } />
                <PostFooter post={ this.props.post } author={ this.props.author } handleLikePost={ this.handleLikePost } handleUnlikePost={ this.handleUnlikePost } currentUser={ this.props.currentUser } />
                
                <CommentsContainer post={ this.props.post } />
            </div>
        )
    }
}

export default connect(null, { likePost, unlikePost })(Post)