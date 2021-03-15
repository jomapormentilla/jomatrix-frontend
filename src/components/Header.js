import React from 'react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
    render(){
        return(
            <div className="header">
                <div style={{ color: '#fff' }}>
                    [ JOMATRIX LOGO ]
                </div>

                <div>
                    <NavLink to="/feed"><i className="bi-house" style={{ fontSize: '20px' }}></i></NavLink>
                    <NavLink to="/chat"><i className="bi-chat" style={{ fontSize: '20px' }}></i></NavLink>
                    <NavLink to="/profile"><i className="bi-person-circle" style={{ fontSize: '20px' }}></i></NavLink>
                    <NavLink to="/settings"><i className="bi-gear" style={{ fontSize: '20px' }}></i></NavLink>
                </div>
            </div>
        )
    }
}

export default Header