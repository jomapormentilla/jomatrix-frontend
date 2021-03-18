import React from 'react'
import { connect } from 'react-redux'

import PostForm from '../posts/PostForm'
import Post from '../posts/Post'
import Loading from '../Loading'

class ProfileMain extends React.Component {
    myPosts = () => {
        return this.props.posts.filter(post => post.user_id === this.props.currentUser.id)
    }

    renderPosts = () => {
        return this.myPosts().length !== 0 ? this.myPosts().map(post => <Post key={ post.id } author={ this.props.currentUser } post={ post } currentUser={ this.props.currentUser } />) : <h1>No Posts</h1>
    }

    render(){
        return(
            <div className="profileMain">
                <p>Profile info goes here</p>
                <br /><hr /><br />
                <PostForm />
                <br /><hr />
                { this.currentUser !== null || !this.props.loading ? this.renderPosts() : <Loading /> }
            </div>
        )
    }
}

const mapStateToProps = state => ({ posts: state.posts, currentUser: state.currentUser })

export default connect(mapStateToProps)(ProfileMain)