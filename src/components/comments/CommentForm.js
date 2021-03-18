import React from 'react'
import { connect } from 'react-redux'
import { createComment } from '../../actions/commentActions'

class CommentForm extends React.Component {
    state = {
        input: ''
    }

    handleOnChange = e => {
        this.setState({
            input: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()

        const data = {
            content: this.state.input,
            id: this.props.post.id,
            type: 'Post'
        }

        this.props.createComment(sessionStorage.accessToken, data)
        this.setState({
            input: ''
        })
    }

    render(){
        return(
            <div className="commentForm">
                <form onSubmit={ this.handleOnSubmit } style={{ display: 'flex' }}>
                    <textarea type="text" onChange={ this.handleOnChange } value={ this.state.input } placeholder="Add a comment..."></textarea>
                    <button type="submit">POST</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { createComment })(CommentForm)