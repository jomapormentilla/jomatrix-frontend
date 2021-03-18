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

                    <div class="footerMini" style={{ marginTop: '10px', color: '#aaa', padding: '5px' }}>
                        <p>
                            About
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