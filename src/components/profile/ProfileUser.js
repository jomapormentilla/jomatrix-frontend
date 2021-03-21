import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/userActions'

class ProfileUser extends React.Component {
    componentDidMount(){
        if (this.props.users.length === 0) { this.props.fetchUsers(sessionStorage.accessToken) }
    }

    myPosts = () => {
        return this.props.posts.filter(post => post.user_id === this.props.user.id)
    }

    render(){
        return(
            <div className="profileMain" style={{ marginBottom: '50px' }}>
                <div style={{ display: 'flex' }}>
                    { !!this.props.user.image ? <div className="profileImageContainer" style={{ width: '100px', height: '100px' }}><img src={ this.props.user.image } alt="profile" class="profileImage" /></div>: <i className="bi-person-circle" style={{ fontSize: '30px', marginRight: '10px' }}></i> }
                    <div style={{ marginLeft: '15px' }}>
                        <div>
                            <span style={{ fontSize: '20px' }}>{ this.props.user.username }</span><br /><br />
                            <span>{ this.props.user.bio }</span><br />
                            <span>{ this.myPosts().length } posts</span><br />
                        </div>
                    </div>
                </div>
                <br /><hr /><br />
            </div>
        )
    }
}

const mapStateToProps = state => ({ users: state.users })

export default connect(mapStateToProps, { fetchUsers })(ProfileUser)