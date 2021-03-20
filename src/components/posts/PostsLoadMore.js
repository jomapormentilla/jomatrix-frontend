import React from 'react'

class PostsLoadMore extends React.Component {
    render(){
        return(
            <div className="postsLoadMore" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px'  }}>
                There are no more posts!
            </div>
        )
    }
}

export default PostsLoadMore