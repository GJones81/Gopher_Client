// Packages
import React from 'react'
import { Route } from 'react-router-dom'

// Custom componentd
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Signup from './pages/Signup'

const Content = props => {

  return (
    <div className="container">
      <Route exact path="/" component={Home} />
      <Route path="/login" render={
        () => <Login props = { props } />
      } />
      <Route path="/profile" render={
        () => <Profile props = { props } />
      } />
      <Route path="/signup" render={
        () => <Signup props = { props } />
      } />
    </div>
  )
}

export default Content
