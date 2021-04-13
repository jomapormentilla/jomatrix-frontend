import React from 'react'
import { connect } from 'react-redux'
import { clearAlert } from '../actions/alertActions'

class Alert extends React.Component {
    componentDidMount(){
        setTimeout(()=>{
            this.props.clearAlert()
        }, 5000
        )
    }

    handleOnClick = e => {
        this.props.clearAlert()
    }

    render(){
        return(
            <div className="alert">
                <span>{ this.props.alert }</span>
                <i className="bi-x" style={{ fontSize: '20px' }} onClick={ this.handleOnClick  }></i>
            </div>
        )
    }
}

export default connect(null, { clearAlert })(Alert)