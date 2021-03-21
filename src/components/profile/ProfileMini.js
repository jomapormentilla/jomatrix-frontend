import React from 'react'
import { Link } from 'react-router-dom'

class ProfileMini extends React.Component {
    render(){
        return(
            <div className="profileMini">
                <div style={{ position: 'fixed', width: 'inherit' }}>
                    <div style={{ display: 'flex', textAlign: 'left', width: '100%', padding: '10px', borderRadius: '5px' }}>
                        { !!this.props.currentUser.image ? <div className="profileImageContainer" style={{ width: '75px', height: '75px' }}><img src={ this.props.currentUser.image } alt="profile" class="profileImage" /></div>: <i className="bi-person-circle" style={{ fontSize: '30px', marginRight: '10px' }}></i> }
                        <div style={{ alignSelf: 'center' }}>
                            { this.props.currentUser.username }<br />
                            <span style={{ color: '#aaa' }}>{ this.props.currentUser.first_name } { this.props.currentUser.last_name }</span>
                        </div>
                    </div>

                    <div className="footerMini" style={{ marginTop: '10px', color: '#aaa', padding: '5px' }}>
                        <p>
                            <Link to="/about">About</Link>
                            &nbsp; - &nbsp; 
                            <a href="https://github.com/jomapormentilla?tab=repositories&q=jomatrix&type=&language=" target="_blank" rel="noreferrer">Github</a>
                            &nbsp; - &nbsp;
                            <a href="https://www.linkedin.com/in/jomapormentilla/" target="_blank" rel="noreferrer">LinkedIn</a>
                            &nbsp; - &nbsp;
                            <a href="https://jomapormentilla.medium.com/" target="_blank" rel="noreferrer">Blog</a>
                        </p>
                        &copy; 2021 JOMATRIX Technologies
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileMini