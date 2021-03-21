import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Loading from '../Loading'
import ProfileNav from './ProfileNav'
import ProfileEdit from './ProfileEdit'
import ProfilePicture from './ProfilePicture'
import ProfilePassword from './ProfilePassword'

const styles = {
    display: 'flex',
    backgroundColor: '#fff',
    width: '600px',
    minHeight: '60vh',
    height: 'fit-content'
}

class Settings extends React.Component {
    render(){
        return(
            <div className="settings">
                <div style={ styles }>
                    <ProfileNav />
                    <Switch>
                        <Route exact path={`${ this.props.routeInfo.match.path }/edit`} component={() => {
                            return this.props.currentUser === null ? <Loading /> : <ProfileEdit currentUser={ this.props.currentUser } />
                        }} />
                        
                        <Route exact path={`${ this.props.routeInfo.match.path }/image`} component={(routeInfo) => {
                            return this.props.currentUser === null ? <Loading /> : <ProfilePicture routeInfo={ routeInfo } currentUser={ this.props.currentUser } />
                        }} />
    
                        <Route exact path={`${ this.props.routeInfo.match.path }/password`} component={(routeInfo) => {
                            return this.props.currentUser === null ? <Loading /> : <ProfilePassword currentUser={ this.props.currentUser } />
                        }} />
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ currentUser: state.currentUser, users: state.users, posts: state.posts })

export default connect(mapStateToProps)(Settings)