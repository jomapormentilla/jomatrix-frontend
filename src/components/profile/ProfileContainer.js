import React from 'react'
import { connect } from 'react-redux'

import ProfileMain from './ProfileMain'

const ProfileContainer = () => {
    return(
        <div className="profile">
            <div>
                <ProfileMain />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({ currentUser: state.currentUser })

export default connect(mapStateToProps)(ProfileContainer)