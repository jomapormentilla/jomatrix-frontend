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

                    <div className="footerMini" style={{ marginTop: '10px', color: '#aaa', padding: '5px' }}>
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

                    <div style={{ display: 'flex', backgroundColor: "#fff", height: 'fit-content', borderRadius: '5px', width: '100%', marginTop: '15px', flexWrap: 'wrap' }}>
                        <div class="grid">1</div>
                        <div class="grid">2</div>
                        <div class="grid">3</div>
                        
                        <div class="grid">4</div>
                        <div class="grid">5</div>
                        <div class="grid">6</div>
                        
                        <div class="grid">7</div>
                        <div class="grid">8</div>
                        <div class="grid">9</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileMini