import React from 'react'
import './App.css';
import { connect } from 'react-redux'
import { fetchUsers } from './actions/userActions'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Login from './components/Login'
import Profile from './components/Profile'
import PostsContainer from './components/PostsContainer'
import Footer from './components/Footer'

class App extends React.Component {
  componentDidMount(){
    this.props.fetchUsers()
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
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Router>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({ users: state.users })

export default connect(mapStateToProps, { fetchUsers })(App)
