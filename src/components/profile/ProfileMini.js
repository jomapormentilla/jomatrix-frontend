import React from 'react'

class ProfileMini extends React.Component {
    render(){
        return(
            <div className="profileMini">
                Hello, { this.props.currentUser.first_name }!
            </div>
        )
    }
}

export default ProfileMini