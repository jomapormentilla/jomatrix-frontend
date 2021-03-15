import React from 'react'
import PostContent from './PostContent'
import CommentsContainer from './CommentsContainer'

class Post extends React.Component {
    render(){
        return(
            <div className="post">
                <div style={{ display: 'flex', alignItems: 'center', padding: '5px 10px' }}>
                    <i className="bi-person-circle" style={{ fontSize: '30px', marginRight: '10px' }}></i>
                    <div>
                    { this.props.author.first_name } { this.props.author.last_name }
                    <br /><span style={{ color: '#777' }}>Location</span>
                    </div>
                </div>

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