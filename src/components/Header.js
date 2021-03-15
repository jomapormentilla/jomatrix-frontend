import React from 'react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
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
                </div>
            </div>
        )
    }
}

export default Header