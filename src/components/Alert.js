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

    backgroundColor = () => {
        console.log(this.props.type)
        switch (this.props.type) {
            case 'success':
                return 'green'
            case 'danger':
                return 'red'
            default:
                return 'blue'
        }
    }

    render(){
        return(
            <div className="alert" style={{ backgroundColor: this.backgroundColor() }}>
                <span>{ this.props.alert }</span>
                <i className="bi-x" style={{ fontSize: '20px' }} onClick={ this.handleOnClick  }></i>
            </div>
        )
    }
}

export default connect(null, { clearAlert })(Alert)