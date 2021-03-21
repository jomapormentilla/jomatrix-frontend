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
                <div style={{ display: 'flex' }}>
                    { !!this.props.currentUser.image ? <div className="profileImageContainer" style={{ width: '100px', height: '100px' }}><img src={ this.props.currentUser.image } alt="profile" class="profileImage" /></div>: <i className="bi-person-circle" style={{ fontSize: '30px', marginRight: '10px' }}></i> }
                    <div style={{ marginLeft: '15px' }}>
                        <div>
                            <span style={{ fontSize: '20px' }}>{ this.props.currentUser.username }</span><br /><br />
                            <span>{ this.props.currentUser.bio }</span><br />
                            <span>{ this.myPosts().length } posts</span><br />
                        </div>
                    </div>
                </div>
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