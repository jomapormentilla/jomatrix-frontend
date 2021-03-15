import React from 'react'

import PostHeader from './PostHeader'
import PostContent from './PostContent'
import CommentsContainer from '../comments/CommentsContainer'

class Post extends React.Component {
    render(){
        return(
            <div className="post">
                <PostHeader author={ this.props.author } />
                <PostContent content={ this.props.post.content } />

                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                    <div style={{ padding: '5px 10px' }}>
                        <i className="bi-heart" style={{ fontSize: '20px', marginRight: '10px' }}></i>
                        <i className="bi-chat" style={{ fontSize: '22px', marginRight: '10px' }}></i>
                    </div>

                    <div style={{ padding: '5px 10px' }}>0 Likes</div>
                </div>
                
                <CommentsContainer postId={ this.props.post.id } />
            </div>
        )
    }
}

export default Post