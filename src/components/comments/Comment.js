import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

class Comment extends React.Component {
    render(){
        return(
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    { !!this.props.author.image ? <div className="profileImageContainer"><img src={ this.props.author.image } alt={`profile-${ this.props.comment.id }`} className="profileImage" /></div> : <i className="bi-person-circle" style={{ marginRight: '10px', fontSize: '40px', alignSelf: 'flex-start' }}></i> }

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div>
                            <span style={{ fontWeight: '900' }}>{ !!this.props.author ? <Link to={ this.props.author.username } style={{ textDecoration: 'none', color: 'rgb(42, 7, 96)' }}>{ this.props.author.username }</Link> : null }</span> &nbsp;
                            <span style={{ color: '#777' }}>{ this.props.comment.content }</span>
                        </div>
                        <span style={{ color: '#aaa' }}>{ moment(this.props.comment.created_at).fromNow() }</span>
                    </div>
                </div>
                <i className="bi-heart" style={{ marginRight: '5px', alignSelf: 'center' }}></i>
            </div>
        )
    }
}

export default Comment