import React from 'react'

class PostForm extends React.Component {
    render(){
        return(
            <div className="postForm">
                <form>
                    <input type="text" placeholder="Create a New Post" />
                </form>
            </div>
        )
    }
}

export default PostForm