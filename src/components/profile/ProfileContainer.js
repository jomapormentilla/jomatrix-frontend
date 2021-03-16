import React from 'react'
import { connect } from 'react-redux'

import ProfileMain from './ProfileMain'

const styles = {
    display: 'flex',
    backgroundColor: '#fff',
    width: '600px',
    minHeight: '60vh'
}

const Profile = () => {
    return(
        <div className="profile">
            <div>
                <ProfileMain />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({ currentUser: state.currentUser })

export default connect(mapStateToProps)(Profile)