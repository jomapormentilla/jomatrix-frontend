import React from 'react'
import { Link } from 'react-router-dom'

class ProfileShuffle extends React.Component {
    shuffleUsers = () => {
        let mySet = new Set()
        let arr = []
        
        do {
            mySet.add(Math.floor(Math.random() * 10))
        } while( mySet.size < this.props.users.length )

        for (let num of mySet) {
            arr.push(this.props.users[num])
        }
        
        return arr
    }



    render(){
        return(
            <div className="profileShuffle" style={{ background: 'none', overflowX: 'scroll' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    { this.shuffleUsers().map(user => !!user ? <Link to={`/profile/${ user.username }`} key={ user.id } style={{ textDecoration: 'none', color: '#000' }}><div style={{ display: 'flex', flexDirection: 'column', alignItems: 'space-between', justifyContent: 'center', width: '45px', marginLeft: '10px', marginRight: '10px', overflow: 'hidden' }}>{ !!user.image ? <div className="profileImageContainer"><img src={ user.image } alt="profile" className="profileImage" /></div> : <i className="bi-person-circle" style={{ fontSize: '40px', marginRight: '10px', padding: '0px' }}></i> }<span>{ user.username }</span></div></Link> : null)}
                </div>
            </div>
        )
    }
}

export default ProfileShuffle