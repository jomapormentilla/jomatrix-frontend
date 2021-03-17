import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

const styles = {
    display: 'flex',
    borderRight: 'solid 1px #ddd',
    width: 'fit-content',
    whiteSpace: 'nowrap',
    padding: '10px'
}

const ProfileNav = props => {
    let { url } = useRouteMatch()

    return(
        <div className="profileNav" style={ styles }>
            <ul>
                <Link to={`${url}/edit`}><li>Edit Profile</li></Link>
                <Link to={`${url}/image`}><li>Change Image</li></Link>
                <Link to={`${url}/password`}><li>Change Password</li></Link>
                <Link to={`${url}/test`}><li>Test Profile</li></Link>
            </ul>
        </div>
    )
}

export default ProfileNav