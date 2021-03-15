import React from 'react'

class Comment extends React.Component {
    render(){
        return(
            <div>
                <span style={{ fontWeight: '900' }}>{ !!this.props.author ? this.props.author.first_name : null }</span> &nbsp;
                <span style={{ color: '#777' }}>{ this.props.comment.content }</span>
            </div>
        )
    }
}

export default Comment