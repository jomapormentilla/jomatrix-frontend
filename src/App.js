import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { autoLogin } from './actions/loginActions'

import Header from './components/Header'
import Login from './components/Login'
import Signup from './components/Signup'
import Chat from './components/Chat'
import ProfileContainer from './components/profile/ProfileContainer'
import ProfileMini from './components/profile/ProfileMini'
import ProfileUser from './components/profile/ProfileUser'
import PostsContainer from './components/posts/PostsContainer'
import Settings from './components/profile/Settings'
import NotFound from './components/NotFound'

class App extends React.Component {
  componentDidMount(){
    console.log('App Component Mounted')
    this.props.autoLogin()
  }
  
  render(){
    return (
      <div className="App">
        <Router>
          { !!this.props.loggedIn ? <Header /> : null }
          <Switch>
            <Route exact path="/">
              { !this.props.loggedIn ? <Login /> : <Redirect to="/feed" /> }
            </Route>

            <Route path="/signup">
              { !this.props.loggedIn ? <Signup /> : <Redirect to="/feed" /> }
            </Route>
            
            <Route path="/feed">
              { !this.props.loggedIn ? <Redirect to="/" /> : (
                <>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <PostsContainer />
                    <ProfileMini currentUser={ this.props.currentUser } />
                  </div>
                </>
              ) }
            </Route>
            
            <Route path="/chat">
              { !this.props.loggedIn ? <Redirect to="/" /> : <Chat /> }
            </Route>

            <Route path="/profile">
              { !this.props.loggedIn ? <Redirect to="/" /> : <ProfileContainer /> }
            </Route>
            
            <Route path="/settings">
              { !this.props.loggedIn ? <Redirect to="/" /> : <Settings /> }
            </Route>

            <Route path="/:username">
              { !this.props.loggedIn ? <Redirect to="/" /> : <ProfileUser /> }
            </Route>

            <Route path="/*" component={ NotFound } />
          </Switch>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  currentUser: state.currentUser,
  stopInfiniteScroll: state.stopInfiniteScroll
})

export default connect(mapStateToProps, { autoLogin })(App)