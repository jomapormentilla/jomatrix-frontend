import React from 'react'
import { connect } from 'react-redux'

import PostForm from '../posts/PostForm'
import Post from '../posts/Post'

// const styles = {
//     display: 'flex',
//     flexDirection: 'column',
//     padding: '10px',
//     width: '100%'
// }

class ProfileMain extends React.Component {
    myPosts = () => {
        return this.props.posts.filter(post => post.user_id === this.props.currentUser.id)
    }

    renderPosts = () => {
        return this.myPosts().map(post => <Post key={ post.id } author={ this.props.currentUser } post={ post } />)
    }

    render(){
        console.log(this.myPosts())
        return(
            <div className="profileMain">
                <p>Profile info goes here</p>
                <br /><hr />
                <PostForm />
                <br /><hr />
                { this.renderPosts() }
            </div>
        )
    }
}

const mapStateToProps = state => ({ posts: state.posts, currentUser: state.currentUser })

export default connect(mapStateToProps)(ProfileMain)