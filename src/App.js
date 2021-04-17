// Import packages
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

// Resources and custom components
import './App.css';
import Content from './content/Content'
import Footer from './nav/Footer'
import Header from './nav/Header'
import Nav from './nav/Nav'

const App = props => {

  const [ userLoginStatus, setUserLoginStatus ] = useState(false)

  const changeUserLoginStatus = status => {
    setUserLoginStatus(status)
  }

  return (
    <Router>
      <div className="App">
        <Nav props = {props} changeUserLoginStatus = {changeUserLoginStatus} userLoginStatus = {userLoginStatus} />
        <Header />
        <main>
          <Content props = {props} changeUserLoginStatus = {changeUserLoginStatus} userLoginStatus = {userLoginStatus} />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
