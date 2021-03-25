// Packages
import React from 'react'
import { useSelector } from 'react-redux'
import { Route } from 'react-router-dom'

// Custom componentd
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Signup from './pages/Signup'

const Content = props => {

  console.log('Content.js', props)

  let storedToken = useSelector(state => state.token.token)

  return (
    <div className="container">
      <Route exact path="/" component={Home} />
      <Route path="/login" render={
        () => <Login user={storedToken} updateToken={props.updateToken} />
      } />
      <Route path="/profile" render={
        () => <Profile user={storedToken} />
      } />
      <Route path="/signup" render={
        () => <Signup user={storedToken} updateToken={props.updateToken} />
      } />
    </div>
  )
}

export default Content
