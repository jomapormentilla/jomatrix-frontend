import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'

import Post from './Post'
import PostForm from './PostForm'
import PostSort from './PostSort'

class PostsContainer extends React.Component {
    componentDidMount(){
        this.props.fetchPosts()
    }

    author = id => {
        return this.props.users.find(user => user.id === id)
    }

    renderPosts = () => {
        return this.props.posts.map(post => <Post key={ post.id } post={ post } author={ this.author(post.user_id) } />)
    }

    render(){
        console.log(this.props.posts)
        return(
            <div className="postsContainer">
                <PostForm />
                <PostSort />
                { this.renderPosts() }
            </div>
        )
    }
}

const mapStateToProps = state => ({ posts: state.posts, users: state.users })

export default connect(mapStateToProps, { fetchPosts })(PostsContainer)