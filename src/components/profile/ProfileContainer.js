import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/userActions'
import { fetchPosts } from '../../actions/postActions'

import ProfileMain from './ProfileMain'
import ProfileUser from './ProfileUser'
import NotFound from '../../components/NotFound'
import Loading from '../Loading'

class ProfileContainer extends React.Component {
    componentDidMount(){
        if (this.props.posts.length === 0 && !this.props.loading) {this.props.fetchPosts(sessionStorage.accessToken, 0) }
        if (this.props.users.length === 0 && !this.props.loading) { this.props.fetchUsers(sessionStorage.accessToken) }
    }

    getUser = () => {
        return this.props.users
    }

    render(){
        return(
            <div className="profile">
                <div>
                    <Route path={`${ this.props.routeInfo.match.path }/:username`} component={ (routeInfo) => {
                        if (this.props.users.length !== 0) {
                            const user = this.props.users.find(user => user.username === routeInfo.match.params.username)
                            return !!user ? <ProfileUser user={ user } posts={ this.props.posts.filter(p => p.user_id === user.id) } users={ this.props.users } /> : <NotFound />
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

export default connect(mapStateToProps, { fetchUsers, fetchPosts })(ProfileContainer)