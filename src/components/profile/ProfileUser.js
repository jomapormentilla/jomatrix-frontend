import React from 'react'

import PostGrid from '../posts/PostGrid'

class ProfileUser extends React.Component {
    render(){
        return(
            <div className="profileMain" style={{ marginBottom: '50px', width: '500px' }}>
                <div style={{ display: 'flex' }}>
                    { !!this.props.user.image ? <div className="profileImageContainer" style={{ width: '100px', height: '100px' }}><img src={ this.props.user.image } alt="profile" class="profileImage" /></div>: <i className="bi-person-circle" style={{ fontSize: '30px', marginRight: '10px' }}></i> }
                    <div style={{ marginLeft: '15px' }}>
                        <div>
                            <span style={{ fontSize: '20px' }}>{ this.props.user.username }</span><br /><br />
                            <span>{ this.props.user.bio }</span><br />
                            <span>{ this.props.user.posts.length } posts</span><br />
                        </div>
                    </div>
                </div>
                <br /><hr /><br />

                <PostGrid user={ this.props.user } posts={ this.props.posts } />
            </div>
        )
    }
}

export default ProfileUser