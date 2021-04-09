import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import Comment from './Comment'
import CommentForm from './CommentForm'

class CommentList extends React.Component {
    author = id => {
        return this.props.users.find(user => user.id === id )
    }

    renderComments = () => {
        return this.props.comments.length > 0 ? this.props.comments.reverse().map(comment => <Comment key={ comment.id } comment={ comment } author={ this.author(comment.user_id) } commentId={ comment.id } />) : <p>No Comments</p>
    }

    render(){
        return(
            <div className="commentList">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingBottom: '10px' }}>
                    <img src={ this.props.post.content } alt={ this.props.post.content } style={{ width: '100px', marginRight: '15px' }} />
                    <div style={{ display: 'flex', alignSelf: 'flex-start' }}>
                        { !!this.author(this.props.post.user_id).image ? <div className="profileImageContainer"><img src={ this.author(this.props.post.user_id).image } alt="profile" className="profileImage" /></div>: <i className="bi-person-circle" style={{ fontSize: '30px', marginRight: '10px' }}></i> }
                        <div>
                            <span style={{ fontWeight: '900' }}><Link to={`/profile/${ this.author(this.props.post.user_id).username }`} style={{ textDecoration: 'none' }}>{ this.author(this.props.post.user_id).username }</Link></span> &nbsp;
                            <span style={{ color: '#777' }}>{ this.props.post.title }</span>
                            <br />
                            <i className="bi-geo-alt"></i> <span style={{ color: '#777' }}>{ this.props.post.location }</span>
                            <br />
                            <span style={{ color: '#aaa' }} title={ moment(this.props.post.created_at).format("dddd, MMMM Do YYYY, h:mm:ss a") }>{ moment(this.props.post.created_at).fromNow() }</span>
                        </div>
                    </div>
                </div>

                <div style={{ flex: '1', overflow: 'scroll', marginBottom: '10px' }}>
                    <div style={{ height: '100%' }}>
                        { this.renderComments() }
                    </div>
                </div>
                <CommentForm post={ this.props.post } />
            </div>
        )
    }
}

export default CommentList