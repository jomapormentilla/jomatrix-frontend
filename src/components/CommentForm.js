import React from 'react'

class CommentForm extends React.Component {
    state = {
        input: ''
    }

    handleOnChange = e => {
        this.setState({
            input: e.target.value
        }, ()=>console.log(this.state.input))
    }

    handleOnSubmit = e => {
        e.preventDefault()
        console.log(e)
    }

    render(){
        return(
            <div className="commentForm">
                <form style={{ display: 'flex' }} onSubmit={ this.handleOnSubmit } >
                    <textarea type="text" onChange={ this.handleOnChange } placeholder="Add a comment..."></textarea>
                    <input type="submit" value="POST" />
                </form>
            </div>
        )
    }
}

export default CommentForm