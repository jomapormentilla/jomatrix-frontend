import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/loginActions'

class Header extends React.Component {
    handleLogout = () => {
        sessionStorage.removeItem('accessToken')
        this.props.logout()
        window.location.reload()
    }

    render(){
        return(
            <div className="header">
                <div className="logo">
                    <NavLink to="/">Jomatrix</NavLink>
                </div>

                <div className="navItems">
                    <NavLink to="/feed"><i className="bi-house"></i></NavLink>
                    <NavLink to="/chat"><i className="bi-chat"></i></NavLink>
                    <NavLink to="/profile"><i className="bi-person-circle"></i></NavLink>
                    <NavLink to="/settings"><i className="bi-gear"></i></NavLink>
                    <i className="bi-box-arrow-right" title="Logout" onClick={ this.handleLogout }></i>
                </div>
            </div>
        )
    }
}

export default connect(null, { logout })(Header)