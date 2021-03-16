import React from 'react'
import { NavLink } from 'react-router-dom'

import NavHeader from './profile/NavHeader'

class Header extends React.Component {
    state = {
        profileNav: {
            display: false,
            clientX: null,
            clientY: null
        }
    }

    handleNavItemClick = (e, navItem) => {
        e.persist()
        this.setState(prevState => ({
            ...prevState, 
            [navItem]: {
                ...prevState,
                display: !prevState[navItem].display,
                clientX: e.clientX,
                clientY: e.clientY
            }
        }), ()=>console.log(this.state))
    }

    hideProfileNav = (e) => {
        if (!!this.state.profileNav.display) {
            this.setState(prevState => ({
                ...prevState,
                profileNav: {
                    ...prevState, display: false
                }
            }))
        }
    }

    render(){
        return(
            <div className="header" onClick={ this.hideProfileNav }>
                <div className="logo">
                    <NavLink to="/">Jomatrix</NavLink>
                </div>

                { this.state.profileNav.display ? <NavHeader clientX={ this.state.profileNav.clientX } clientY={ this.state.profileNav.clientY } /> : null }

                <div className="navItems">
                    <NavLink to="/feed"><i className="bi-house"></i></NavLink>
                    <NavLink to="/chat"><i className="bi-chat"></i></NavLink>
                    <i className="bi-person-circle" onClick={ e => this.handleNavItemClick(e, 'profileNav') }></i>
                </div>
            </div>
        )
    }
}

export default Header