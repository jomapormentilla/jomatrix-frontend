import React from 'react'
import { connect } from 'react-redux'
import { fetchAllPosts } from '../../actions/postActions'

import PostMini from './PostMini'

class PostGrid extends React.Component {
    renderPosts = () => {
        return this.props.posts
        .filter(post => post.user_id === this.props.user.id)
        .map(post => <PostMini key={ post.id } post={ post } />)
    }

    loadAllPosts = () => {
        this.props.fetchAllPosts(sessionStorage.accessToken)
    }

    render(){
        return(
            <div>
                <div className="gridContainer">
                    { this.renderPosts() }
                </div>
                { this.props.posts.length <= this.props.user.posts.length || this.props.posts.length === 10 ? <button onClick={ this.loadAllPosts }>Load All</button> : null }
            </div>
        )
    }
}

export default connect(null, { fetchAllPosts })(PostGrid)