import React from 'react'
import { connect } from 'react-redux'

import PostForm from '../posts/PostForm'
import Post from '../posts/Post'
import PostsLoadMore from '../posts/PostsLoadMore'
import Loading from '../Loading'

class ProfileMain extends React.Component {
    componentDidMount(){
        window.scrollTo(0,0)
    }

    myPosts = () => {
        return this.props.posts.filter(post => post.user_id === this.props.currentUser.id)
    }

    renderPosts = () => {
        return this.myPosts().length !== 0 ? this.myPosts().map(post => <Post key={ post.id } author={ this.props.currentUser } post={ post } currentUser={ this.props.currentUser } />) : <h1>No Posts</h1>
    }

    render(){
        return(
            <div className="profileMain" style={{ marginBottom: '50px' }}>
                <p>Profile info goes here</p>
                <br /><hr /><br />
                { this.props.currentUser === null ? 'Loading...' : <PostForm currentUser={ this.props.currentUser } /> }
                <br /><hr />
                { this.props.currentUser === null || this.props.loading ? <Loading /> : this.renderPosts() }
                <PostsLoadMore />
            </div>
        )
    }
}

const mapStateToProps = state => ({ posts: state.posts, currentUser: state.currentUser, loggedIn: state.loggedIn })

export default connect(mapStateToProps)(ProfileMain)