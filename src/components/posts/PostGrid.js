import React from 'react'

class PostGrid extends React.Component {
    render(){
        return(
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
        )
    }
}

export default PostGrid