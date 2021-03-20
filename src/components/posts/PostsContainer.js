import React from 'react'
import { connect } from 'react-redux'

import Loading from '../../components/Loading'
import Post from './Post'
import PostSort from './PostSort'
import PostsLoadMore from './PostsLoadMore'

class PostsContainer extends React.Component {
    componentDidMount(){
        console.log('PostsContainer Mounted')
        window.scrollTo(0,0)
    }

    author = id => {
        return this.props.users.find(user => user.id === id)
    }

    renderPosts = () => {
        return this.props.posts.map(post => <Post key={ post.id } post={ post } author={ this.author(post.user_id) } currentUser={ this.props.currentUser } users={ this.props.users } />)
    }

    render(){
        return(
            <div className="postsContainer" style={{ marginBottom: '50px' }}>
                <PostSort />
                { this.props.loading || this.props.posts.length === 0 || this.props.users.length === 0 ? <Loading /> : this.renderPosts() }
                <PostsLoadMore />
            </div>
        )
    }
}

const mapStateToProps = state => ({ posts: state.posts, users: state.users, loading: state.loading, loggedIn: state.loggedIn, currentUser: state.currentUser })

export default connect(mapStateToProps)(PostsContainer)