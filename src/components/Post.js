import React from 'react'

class Post extends React.Component {
    render(){
        return(
            <div>
                { this.props.post.title }
                <br />
                By: { this.props.author.first_name }
            </div>
        )
    }
}

export default Post