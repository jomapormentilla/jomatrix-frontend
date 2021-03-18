import React from 'react'

class Comment extends React.Component {
    render(){
        return(
            <div style={{ marginTop: '5px' }}>
                <span style={{ fontWeight: '900' }}>{ !!this.props.author ? this.props.author.username : null }</span> &nbsp;
                <span style={{ color: '#777' }}>{ this.props.comment.content }</span>
            </div>
        )
    }
}

export default Comment