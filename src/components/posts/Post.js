import React from 'react'

import PostHeader from './PostHeader'
import PostContent from './PostContent'
import PostFooter from './PostFooter'
import CommentsContainer from '../comments/CommentsContainer'

class Post extends React.Component {
    render(){
        return(
            <div className="post">
                <PostHeader post={ this.props.post } author={ this.props.author } />
                <PostContent content={ this.props.post.content } />
                <PostFooter post={ this.props.post } author={ this.props.author } />
                
                <CommentsContainer postId={ this.props.post.id } />
            </div>
        )
    }
}

export default Post