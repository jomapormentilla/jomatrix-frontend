import React from 'react'

class PostContent extends React.Component {
    render(){
        return(
            <div className="postContent" onDoubleClick={ (e)=>{this.props.handleLikePost(e, this.props.post.id)} }>
                <img src={ this.props.post.content } alt={ this.props.post.content } style={{ width: '100%' }} />
            </div>
        )
    }
}

export default PostContent