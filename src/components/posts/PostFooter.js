import React from 'react'

import Modal from '../Modal'
import PostLikes from './PostLikes'

class PostFooter extends React.Component {
    state = {
        modal: false
    }

    renderHearts = () => {
        let liked = this.props.post.likes.find(like => like.user_id === this.props.currentUser.id)

        if (!!liked) {
            return <i className="bi-heart-fill" style={{ fontSize: '20px', marginRight: '10px', color: 'red' }} onClick={ (e)=>{this.props.handleUnlikePost(e, liked.id)} }></i>
        } else {
            return <i className="bi-heart" style={{ fontSize: '20px', marginRight: '10px' }} onClick={ (e)=>{this.props.handleLikePost(e, this.props.post.id)} }></i>
        }
    }

    toggleModal = e => {
        this.setState(prevState => ({ 
            modal: !prevState.modal
         }))
    }

    render(){
        return(
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                { !!this.state.modal ? <Modal toggleModal={ this.toggleModal } component={ <PostLikes likes={ this.props.post.likes } />} /> : null }
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ padding: '5px 10px' }}>
                        { this.renderHearts() }
                        <i className="bi-chat" style={{ fontSize: '22px', marginRight: '10px' }}></i>
                    </div>
                    <div style={{ padding: '10px', fontSize: '12px', fontWeight: '900', alignSelf: 'center', cursor: 'pointer' }} onClick={ this.toggleModal }>
                        { this.props.post.likes.length }
                        { this.props.post.likes.length === 1 ? ' Like' : ' Likes' }
                    </div>
                </div>

                <div style={{ padding: '0px 10px' }}>
                    <span style={{ fontWeight: '900' }}>{ !!this.props.author ? this.props.author.first_name : null }</span> &nbsp;
                    <span style={{ color: '#777' }}>{ this.props.post.title }</span>
                    <br />
                </div>
            </div>
        )
    }
}

export default PostFooter