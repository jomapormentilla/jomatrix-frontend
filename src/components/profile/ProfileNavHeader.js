import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions/loginActions'

class ProfileNavHeader extends React.Component {
    handleLogout = () => {
        sessionStorage.removeItem('accessToken')
        this.props.logout()
    }

    render(){
        return(
            <div className="navHeader" style={{ top: 50, left: this.props.clientX-100 }}>
                <ul>
                    <NavLink to="/profile"><li><i className="bi-person-circle"></i> &nbsp; Profile</li></NavLink>
                    <NavLink to="/settings/edit"><li><i className="bi-gear"></i> &nbsp; Settings</li></NavLink>
                    <li onClick={ this.handleLogout } style={{ borderTop: 'solid 1px #ccc' }}><i className="bi-box-arrow-right" title="Logout"></i> &nbsp; Logout</li>
                </ul>
            </div>
        )
    }
}

export default connect(null, { logout })(ProfileNavHeader)