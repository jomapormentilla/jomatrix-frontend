import React from 'react'
import moment from 'moment'

class PostHeader extends React.Component {
    render(){
        return(
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 10px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <i className="bi-person-circle" style={{ fontSize: '30px', marginRight: '10px' }}></i>
                    <div>
                        { this.props.author.first_name } { this.props.author.last_name }
                        <br /><span style={{ color: '#777' }}>Location { this.props.post.id }</span> &nbsp;
                        <span style={{ color: '#aaa' }} title={ moment(this.props.post.created_at).format("dddd, MMMM Do YYYY, h:mm:ss a") }>{ moment(this.props.post.created_at).fromNow() }</span>
                    </div>
                </div>

                <div>
                    <i className="bi-three-dots" style={{ fontSize: '20px' }}></i>
                </div>
            </div>
        )
    }
}

export default PostHeader