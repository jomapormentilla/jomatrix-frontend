import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import Modal from '../Modal'
import PostMenu from './PostMenu'

class PostHeader extends React.Component {
    state = {
        modal: false
    }

    toggleModal = e => {
        this.setState(prevState => ({ 
            modal: !prevState.modal
         }))
    }

    render(){
        return(
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 10px' }}>
                { !!this.state.modal ? <Modal toggleModal={ this.toggleModal } component={ <PostMenu post={ this.props.post } toggleModal={ this.toggleModal } />} /> : null }
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    { !!this.props.author.image ? <div className="profileImageContainer"><img src={ this.props.author.image } alt="profile" class="profileImage" /></div>: <i className="bi-person-circle" style={{ fontSize: '30px', marginRight: '10px' }}></i> }
                    <div>
                        <Link to={`/profile/${ this.props.author.username }`} style={{ textDecoration: 'none', color: '#000' }}>{ this.props.author.first_name } { this.props.author.last_name }</Link>
                        <br /><i className="bi-geo-alt"></i> <span style={{ color: '#777' }}>{ this.props.post.location }</span> &nbsp;
                        <span style={{ color: '#aaa' }} title={ moment(this.props.post.created_at).format("dddd, MMMM Do YYYY, h:mm:ss a") }>{ moment(this.props.post.created_at).fromNow() }</span>
                    </div>
                </div>

                { 
                this.props.post.user_id === this.props.currentUser.id ?
                    <div onClick={ this.toggleModal } style={{ cursor: 'pointer' }}>
                        <i className="bi-three-dots" style={{ fontSize: '20px' }}></i>
                    </div> : null
                }
            </div>
        )
    }
}

export default PostHeader