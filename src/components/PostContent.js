import React from 'react'

class PostContent extends React.Component {
    render(){
        return(
            <div className="postContent">
                { this.props.content }
            </div>
        )
    }
}

export default PostContent