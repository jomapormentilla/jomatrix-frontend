import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/userActions'
import { fetchPosts } from '../../actions/postActions'

import Post from './Post'
import PostForm from './PostForm'
import PostSort from './PostSort'
import PostsLoadMore from './PostsLoadMore'

class PostsContainer extends React.Component {
    componentDidMount(){
        this.props.fetchPosts(this.props.token)
        this.props.fetchUsers(this.props.token)
        console.log(`PostsContainer mounted`)
    }

    author = id => {
        return this.props.users.find(user => user.id === id)
    }

    renderPosts = () => {
        return this.props.posts.map(post => <Post key={ post.id } post={ post } author={ this.author(post.user_id) } />)
    }

    render(){
        console.log(this.props)
        return(
            <div className="postsContainer">
                <PostForm />
                <PostSort />
                { this.props.loading && this.props.posts.length === 0 && this.props.users.length === 0 ? <h1>Loading...</h1> : this.renderPosts() }
                <PostsLoadMore />
            </div>
        )
    }
}

const mapStateToProps = state => ({ posts: state.posts, users: state.users, loading: state.loading, token: state.token, loggedIn: state.loggedIn, current_user: state.current_user })

export default connect(mapStateToProps, { fetchUsers, fetchPosts })(PostsContainer)