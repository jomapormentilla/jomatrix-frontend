import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/userActions'
import { fetchPosts } from '../../actions/postActions'

import Loading from '../../components/Loading'
import Post from './Post'
import PostSort from './PostSort'
import PostsLoadMore from './PostsLoadMore'

class PostsContainer extends React.Component {
    componentDidMount(){
        this.props.fetchPosts(sessionStorage.accessToken)
        this.props.fetchUsers(sessionStorage.accessToken)
    }

    author = id => {
        return this.props.users.find(user => user.id === id)
    }

    renderPosts = () => {
        return this.props.posts.map(post => <Post key={ post.id } post={ post } author={ this.author(post.user_id) } />)
    }

    render(){
        return(
            <div className="postsContainer">
                <PostSort />
                { this.props.loading || this.props.posts.length === 0 || this.props.users.length === 0 ? <Loading /> : this.renderPosts() }
                <PostsLoadMore />
            </div>
        )
    }
}

const mapStateToProps = state => ({ posts: state.posts, users: state.users, loading: state.loading, loggedIn: state.loggedIn, currentUser: state.currentUser })

export default connect(mapStateToProps, { fetchUsers, fetchPosts })(PostsContainer)