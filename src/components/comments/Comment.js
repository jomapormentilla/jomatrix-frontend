import React from 'react'
import moment from 'moment'

class Comment extends React.Component {
    render(){
        return(
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <i className="bi-person-circle" style={{ marginRight: '10px', fontSize: '30px', alignSelf: 'flex-start' }}></i>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div>
                            <span style={{ fontWeight: '900' }}>{ !!this.props.author ? this.props.author.username : null }</span> &nbsp;
                            <span style={{ color: '#777' }}>{ this.props.comment.content }</span>
                        </div>
                        <span style={{ color: '#aaa' }}>{ moment(this.props.comment.created_at).fromNow() }</span>
                    </div>
                </div>
                <i className="bi-heart" style={{ marginRight: '5px' }}></i>
            </div>
        )
    }
}

export default Comment