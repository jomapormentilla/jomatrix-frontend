import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
  state = {
    current_user: {
      email: ''
    }
  }

  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            
            <Route path="/signup">
              <Signup />
            </Route>
            
            <Route path="/feed">
              <Header />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <PostsContainer />
                <ProfileMini />
              </div>
              <Footer />
            </Route>
            
            <Route path="/chat">
              <Header />
              <Chat />
            </Route>

            <Route path="/profile">
              <Header />
              <ProfileContainer />
            </Route>
            
            <Route path="/settings">
              <Header />
              <Settings />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App