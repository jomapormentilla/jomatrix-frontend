import React from 'react'

class PostContent extends React.Component {
    handleOnClick = e => {
        let liked = this.props.post.likes.find(like => like.user_id === this.props.currentUser.id)

        !liked ? this.props.handleLikePost(e, this.props.post.id) : this.props.handleUnlikePost(e, liked.id)
    }

    render(){
        return(
            <div className="postContent" onDoubleClick={ this.handleOnClick }>
                <img src={ this.props.post.content } alt={ this.props.post.content } style={{ width: '100%' }} />
            </div>
        )
    }
}

export default PostContent