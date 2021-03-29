import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { likeComment, unlikeComment } from '../../actions/commentActions'

class Comment extends React.Component {
    handleLikeComment = (e, commentId) => {
        this.props.likeComment(sessionStorage.accessToken, commentId)
    }

    handleUnlikeComment = (e, postId) => {
        this.props.unlikeComment(sessionStorage.accessToken, postId)
    }

    renderHearts = () => {
        let liked = this.props.comment.likes ? this.props.comment.likes.find(like => like.user_id === this.props.currentUser.id) : null

        if (!!liked) {
            return <i className="bi-heart-fill" style={{ marginRight: '5px', alignSelf: 'center', color: 'red', cursor: 'pointer' }} onClick={ (e)=>{this.handleUnlikeComment(e, liked.id)} }></i>
        } else {
            return <i className="bi-heart" style={{ marginRight: '5px', alignSelf: 'center', cursor: 'pointer' }} onClick={ (e)=>{this.handleLikeComment(e, this.props.comment.id)} }></i>
        }
    }

    renderLikes = () => {
        if (this.props.comment.likes && this.props.comment.likes && this.props.comment.likes.length > 0) {
            return this.props.comment.likes.length === 1 ? `${ this.props.comment.likes.length } Like` : `${ this.props.comment.likes.length } Likes`
        }
    }

    render(){
        return(
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    { !!this.props.author.image ? <div className="profileImageContainer" style={{ minWidth: '40px' }}><img src={ this.props.author.image } alt={`profile-${ this.props.comment.id }`} className="profileImage" /></div> : <i className="bi-person-circle" style={{ marginRight: '10px', fontSize: '40px', alignSelf: 'flex-start' }}></i> }

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div>
                            <span style={{ fontWeight: '900' }}>{ !!this.props.author ? <Link to={ `/profile/${ this.props.author.username }` } style={{ textDecoration: 'none', color: 'rgb(42, 7, 96)' }}>{ this.props.author.username }</Link> : null }</span> &nbsp;
                            <span style={{ color: '#777' }}>{ this.props.comment.content }</span>
                        </div>
                        <div style={{ color: '#aaa' }}>
                            <span>{ moment(this.props.comment.created_at).fromNow() }</span> &nbsp;
                            { this.renderLikes() }
                        </div>
                    </div>
                </div>
                { this.renderHearts() }
            </div>
        )
    }
}

const mapStateToProps = state => ({ currentUser: state.currentUser })

export default connect(mapStateToProps, { likeComment, unlikeComment })(Comment)