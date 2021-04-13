import React from 'react'

class PostMini extends React.Component {
    render(){
        console.log(this.props.post)
        return(
            <div className="postMini">
                <div className="postFade">
                    <div className="postFadeContent">
                        <i className="bi-heart-fill" style={{ fontSize: '15px' }}></i> &nbsp;<span style={{ fontSize: '15px' }}>{ this.props.post.likes.length > 0 ? this.props.post.likes.length : '0' }</span> &nbsp; &nbsp;
                        <i className="bi-chat-fill" style={{ fontSize: '16px' }}></i> &nbsp;<span style={{ fontSize: '15px' }}>{ this.props.post.comments.length > 0 ? this.props.post.comments.length : '0' }</span>
                    </div>
                </div>
                <img src={ this.props.post.content } alt={`post-${ this.props.post.id }`} />
            </div>
        )
    }
}

export default PostMini