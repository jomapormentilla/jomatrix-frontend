import React from 'react'

class About extends React.Component {
    render(){
        return(
            <div className="about">
                <div style={{ width: '450px' }}>
                    <h1>Thanks for using Jomatrix</h1>
                    <p>Jomatrix is a photo sharing application built with a React frontend and a Rails API backend. Users can upload images to their account, browse images posted by other users, leave comments &amp; likes on posts, and follow other users.</p>

                    <h2>Video Demo</h2>
                    <iframe width="100%" height="400" src="https://www.youtube.com/embed/hZo0frzrq3g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        )
    }
}

export default About