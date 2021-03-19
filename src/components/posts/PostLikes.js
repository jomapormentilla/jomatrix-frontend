import React from 'react'
import { connect } from 'react-redux'

import Like from './Like'

class PostLikes extends React.Component {
    renderLikes = () => {
        return this.props.likes.map(like => <Like key={ like.id } like={ like } user={ this.props.users.find(user => user.id === like.user_id) } />)
    }

    render(){
        return(
            <div className="postLikes" style={{ justifyContent: 'flex-start' }}>
                { this.renderLikes() }
            </div>
        )
    }
}

const mapStateToProps = state => ({ users: state.users })

export default connect(mapStateToProps)(PostLikes)