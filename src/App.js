import React from 'react'
import './App.css';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Login from './components/Login'
import Profile from './components/Profile'
import PostsContainer from './components/posts/PostsContainer'
import Footer from './components/Footer'

class App extends React.Component {
  componentDidMount(){
    
  }

  render(){
    return (
      <div className="App">
        <Router>
          <Route exact path="/">
            <Login />
          </Route>

          <Route path="/feed">
            <Header />
            <PostsContainer />
            <Footer />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({ users: state.users })

export default connect(mapStateToProps)(App)
