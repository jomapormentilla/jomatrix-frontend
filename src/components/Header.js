import React from 'react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
    render(){
        return(
            <div className="header">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            </div>
        )
    }
}

export default Header