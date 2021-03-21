import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/userActions'
import { fetchPosts } from '../../actions/postActions'
import { fetchComments } from '../../actions/commentActions'

import Loading from '../../components/Loading'
import Post from './Post'
import ProfileShuffle from '../profile/ProfileShuffle'
import PostsLoadMore from './PostsLoadMore'
import ProfileMini from '../profile/ProfileMini'

class PostsContainer extends React.Component {
    componentDidMount(){
        this.page = 0
        this.props.fetchPosts(sessionStorage.accessToken, this.page)
        this.props.fetchUsers(sessionStorage.accessToken)
        this.props.fetchComments(sessionStorage.accessToken)
        
        window.scrollTo(0,0)
        window.addEventListener('scroll', this.handleInfiniteScroll)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleInfiniteScroll)
    }

    handleInfiniteScroll = () => {
        if (window.innerHeight > document.querySelector('.App').getBoundingClientRect().bottom-1 && !this.props.stopInfiniteScroll) {
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
        return(
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="postsContainer" style={{ marginBottom: '50px' }}>
                    <ProfileShuffle users={ this.props.users } />
                    { this.props.loading || this.props.posts.length === 0 || this.props.users.length === 0 || this.props.currentUser === null ? <Loading /> : this.renderPosts() }
                    <PostsLoadMore />
                </div>
                { !!this.props.currentUser ? <ProfileMini currentUser={ this.props.currentUser } /> : <Loading /> }
            </div>
        )
    }
}

const mapStateToProps = state => ({ posts: state.posts, users: state.users, loading: state.loading, loggedIn: state.loggedIn, currentUser: state.currentUser, stopInfiniteScroll: state.stopInfiniteScroll })

export default connect(mapStateToProps, { fetchUsers, fetchPosts, fetchComments })(PostsContainer)