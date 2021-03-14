import React from 'react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
    render(){
        return(
            <div className="header">
                <div>
                    [ JOMATRIX LOGO ]
                </div>

                <div>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
                </div>
            </div>
        )
    }
}

export default Header