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
        return this.props.currentUser ? this.props.posts.filter(post => post.user_id === this.props.currentUser.id) : 0
    }

    renderPosts = () => {
        return this.myPosts().length !== 0 ? this.myPosts().map(post => <Post key={ post.id } author={ this.props.currentUser } post={ post } currentUser={ this.props.currentUser } />) : <h1>No Posts</h1>
    }

    render(){
        return(
            <div className="profileMain" style={{ marginBottom: '50px' }}>
                <div style={{ display: 'flex' }}>
                    { this.props.currentUser && !!this.props.currentUser.image ? <div className="profileImageContainer" style={{ width: '100px', height: '100px' }}><img src={ this.props.currentUser.image } alt="profile" className="profileImage" /></div>: <i className="bi-person-circle" style={{ fontSize: '30px', marginRight: '10px' }}></i> }
                    <div style={{ marginLeft: '15px' }}>
                        <div>
                            <span style={{ fontSize: '20px' }}>{ this.props.currentUser ? this.props.currentUser.username : 'Loading...' }</span><br /><br />
                            <span>{ this.props.currentUser ? this.props.currentUser.bio : 'Loading...' }</span><br />
                            { this.props.currentUser ? <a href={ this.props.currentUser.website } target="_blank" rel="noreferrer">{ this.props.currentUser.website }</a> : 'Loading...' }<br />
                            <span>{ this.props.currentUser ? this.props.currentUser.posts.length : 'Loading...' } posts</span><br />
                        </div>
                    </div>
                </div>
                <br /><hr /><br />
                { !this.props.currentUser ? 'Loading...' : <PostForm currentUser={ this.props.currentUser } /> }
                <br /><hr />
                { !this.props.currentUser || this.props.loading ? <Loading /> : this.renderPosts() }
                <PostsLoadMore />
            </div>
        )
    }
}

const mapStateToProps = state => ({ posts: state.posts, currentUser: state.currentUser, loggedIn: state.loggedIn })

export default connect(mapStateToProps)(ProfileMain)