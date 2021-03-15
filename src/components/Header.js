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
                    <NavLink to="/"><i className="bi-house" style={{ fontSize: '20px' }}></i></NavLink>
                    <NavLink to="/profile"><i className="bi-person-circle" style={{ fontSize: '20px' }}></i></NavLink>
                </div>
            </div>
        )
    }
}

export default Header