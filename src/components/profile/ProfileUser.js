import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/userActions'

class ProfileUser extends React.Component {
    componentDidMount(){
        this.props.fetchUsers(sessionStorage.accessToken)
    }

    render(){
        return(
            <div>
                { this.props.user.first_name }
            </div>
        )
    }
}

const mapStateToProps = state => ({ users: state.users })

export default connect(mapStateToProps, { fetchUsers })(ProfileUser)