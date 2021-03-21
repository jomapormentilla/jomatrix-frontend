import React from 'react'
import { Link } from 'react-router-dom'

const Like = ({ user }) => {
    return(
        <div className="like">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                { !!user.image ? <div className="profileImageContainer"><img src={ user.image } alt="profile" class="profileImage" /></div>: <i className="bi-person-circle" style={{ fontSize: '30px', marginRight: '10px' }}></i> }
                <Link to={`/profile/${ user.username }`} style={{ textDecoration: 'none', color: '#000' }}>{ user.first_name } { user.last_name }</Link>
            </div>
        </div>
    )
}

export default Like