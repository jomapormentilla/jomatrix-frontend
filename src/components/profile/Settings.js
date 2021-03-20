import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/userActions'
import { fetchPosts } from '../../actions/postActions'

import Loading from '../Loading'
import ProfileNav from './ProfileNav'
import ProfileEdit from './ProfileEdit'
import Map from '../Map'

const styles = {
    display: 'flex',
    backgroundColor: '#fff',
    width: '600px',
    minHeight: '60vh',
    height: 'fit-content'
}

class Settings extends React.Component {
    componentDidMount(){
        if (this.props.posts.length === 0) { this.props.fetchPosts(sessionStorage.accessToken) }
        if (this.props.users.length === 0) { this.props.fetchUsers(sessionStorage.accessToken) }
    }
    
    render(){
        return(
            <div className="settings">
                <div style={ styles }>
                    <ProfileNav />
                    <Switch>
                        <Route exact path={`${ this.props.routeInfo.match.path }/edit`} component={() => {
                            return this.props.currentUser === null ? <Loading /> : <ProfileEdit currentUser={ this.props.currentUser } />
                        }} />
                        
                        <Route exact path={`${ this.props.routeInfo.match.path }/image`}>
                            Change Profile Picture
                        </Route>
    
                        <Route exact path={`${ this.props.routeInfo.match.path }/password`}>
                            Password Change
                        </Route>
    
                        <Route path={`${ this.props.routeInfo.match.path }/:test`}>
                            <Map />
                        </Route>
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ currentUser: state.currentUser, users: state.users, posts: state.posts })

export default connect(mapStateToProps, { fetchUsers, fetchPosts })(Settings)