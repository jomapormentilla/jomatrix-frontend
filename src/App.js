import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from './components/Header'
import Login from './components/Login'
import Signup from './components/Signup'
import Chat from './components/Chat'
import ProfileContainer from './components/profile/ProfileContainer'
import ProfileMini from './components/profile/ProfileMini'
import PostsContainer from './components/posts/PostsContainer'
import Settings from './components/profile/Settings'
import Footer from './components/Footer'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Router>
          { !!this.props.loggedIn ? <Header /> : null }
          <Switch>
            <Route exact path="/" render={()=> !this.props.loggedIn ? <Login /> : <Redirect to="/feed" /> } />
            <Route path="/signup" render={()=> !this.props.loggedIn ? <Signup /> : <Redirect to="/feed" /> } />
            
            <Route path="/feed">
              { !this.props.loggedIn ? <Redirect to="/" /> : (
                <>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <PostsContainer />
                    <ProfileMini />
                  </div>
                  <Footer />
                </>
              ) }
            </Route>
            
            <Route path="/chat">
              <Chat />
            </Route>

            <Route path="/profile">
              <ProfileContainer />
            </Route>
            
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => ({ loggedIn: state.loggedIn, current_user: state.current_user })

export default connect(mapStateToProps)(App)