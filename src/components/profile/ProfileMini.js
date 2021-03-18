import React from 'react'

class ProfileMini extends React.Component {
    render(){
        return(
            <div className="profileMini">
                <div style={{ position: 'fixed', width: 'inherit' }}>
                    <div style={{ textAlign: 'left', backgroundColor: '#fff', width: '100%', padding: '10px', borderRadius: '5px' }}>
                        Hello, { this.props.currentUser.first_name }!
                        <br />
                        Test
                    </div>

                    <div style={{ marginTop: '10px', color: '#aaa', padding: '5px' }}>
                        <p>About - Github - LinkedIn</p>
                        &copy; 2021 JOMATRIX Technologies
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileMini