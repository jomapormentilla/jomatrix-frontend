import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/userActions'
import { fetchAllPosts } from '../../actions/postActions'

import ProfileMain from './ProfileMain'
import ProfileUser from './ProfileUser'
import NotFound from '../../components/NotFound'
import Loading from '../Loading'

class ProfileContainer extends React.Component {
    componentDidMount(){
        if (this.props.posts.length === 0 && !this.props.loading) {this.props.fetchAllPosts(sessionStorage.accessToken) }
        if (this.props.users.length === 0 && !this.props.loading) { this.props.fetchUsers(sessionStorage.accessToken) }
    }

    render(){
        return(
            <div className="profile">
                <div>
                    <Route path={`${ this.props.routeInfo.match.path }/:username`} component={ (routeInfo) => {
                        if (this.props.users.length !== 0) {
                            const user = this.props.users.find(user => user.username === routeInfo.match.params.username)
                            return !!user ? <ProfileUser user={ user } posts={ this.props.posts } /> : <NotFound />
                        } else {
                            return <Loading />
                        }
                    }} />
                    
                    <Route exact path={this.props.routeInfo.match.path} component={ () => !sessionStorage.accessToken ? <Redirect to="/" /> : <ProfileMain /> } />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ currentUser: state.currentUser, loggedIn: state.loggedIn, users: state.users, posts: state.posts, loading: state.loading })

export default connect(mapStateToProps, { fetchUsers, fetchAllPosts })(ProfileContainer)