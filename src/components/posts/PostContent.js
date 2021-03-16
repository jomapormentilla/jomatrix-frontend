import React from 'react'

class PostContent extends React.Component {
    render(){
        return(
            <div className="postContent">
                <img src={ this.props.content } alt={ this.props.content } style={{ width: '100%' }} />
            </div>
        )
    }
}

export default PostContent