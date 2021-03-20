import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/userActions'
import { fetchPosts } from '../../actions/postActions'
import { fetchComments } from '../../actions/commentActions'

import Loading from '../../components/Loading'
import Post from './Post'
import PostSort from './PostSort'
import PostsLoadMore from './PostsLoadMore'

class PostsContainer extends React.Component {
    componentDidMount(){
        console.log('PostsContainer Mounted')
        this.page = 0
        this.props.fetchPosts(sessionStorage.accessToken, this.page)
        this.props.fetchUsers(sessionStorage.accessToken)
        this.props.fetchComments(sessionStorage.accessToken)
        window.scrollTo(0,0)
    }

    handleInfiniteScroll = () => {
        if (window.innerHeight === document.querySelector('.App').getBoundingClientRect().bottom && !this.props.stopInfiniteScroll) {
          this.page++
          this.props.fetchPosts(sessionStorage.accessToken, this.page)
        }
      }

    author = id => {
        return this.props.users.find(user => user.id === id)
    }

    renderPosts = () => {
        return this.props.posts.map(post => <Post key={ post.id } post={ post } author={ this.author(post.user_id) } currentUser={ this.props.currentUser } users={ this.props.users } />)
    }

    render(){
        window.onscroll = () => this.handleInfiniteScroll()
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

export default connect(mapStateToProps, { fetchUsers, fetchPosts, fetchComments })(PostsContainer)