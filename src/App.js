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
import PostsContainer from './components/posts/PostsContainer'
import Settings from './components/profile/Settings'
import NotFound from './components/NotFound'
import About from './components/About'
import Alert from './components/Alert'

class App extends React.Component {
  render(){
    this.props.autoLogin()
    return (
      <div className="App">
        { !!this.props.alert ? <Alert alert={ this.props.alert } type={ this.props.alertType } /> : null }
        <Router>
          { !!sessionStorage.accessToken ? <Header /> : null }
          <Switch>
            <Route exact path="/">
              { !this.props.loggedIn ? <Login /> : <Redirect to="/feed" /> }
            </Route>

            <Route path="/signup">
              { !this.props.loggedIn ? <Signup /> : <Redirect to="/feed" /> }
            </Route>
          

            <Route path="/feed" component={() => {
              return !sessionStorage.accessToken ? <Redirect to="/" /> : <PostsContainer /> 
            }} />
            
            <Route path="/chat">
              { !sessionStorage.accessToken ? <Redirect to="/" /> : <Chat /> }
            </Route>

            <Route path="/profile" component={ (routeInfo) => {
              return !sessionStorage.accessToken ? <Redirect to="/" /> : <ProfileContainer routeInfo={ routeInfo } />
            }} />
            
            <Route path="/settings" component={(routeInfo) => {
              return !sessionStorage.accessToken ? <Redirect to="/" /> : <Settings routeInfo={ routeInfo } />
            }} />

            <Route exact path="/about" component={ About } />

            <Route path="/*" component={ NotFound } />
          </Switch>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  alert: state.alert,
  alertType: state.alertType
})

export default connect(mapStateToProps, { autoLogin })(App)