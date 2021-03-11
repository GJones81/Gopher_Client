// Import packages
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

// Resources and custom components
import './App.css';
import Content from './content/Content'
// import VerifyToken from './content/VerifyToken'
import Footer from './nav/Footer'
import Header from './nav/Header'
import Nav from './nav/Nav'

const App = props => {
  // Declare state variables
  let [user, setUser] = useState(null)

  let storeToken = useSelector((state) => state.token.token)
  // console.log('state', storeToken)

  const dispatch = useDispatch()

  // useEffect hook
  useEffect(() => {
    decodeToken()
  }, [])

  const decodeToken = () => {

    // let token = localStorage.getItem('boilerToken')
    // console.log('token is', token)
    // console.log('storeToken is', storeToken)
    
    if (storeToken) {
      //Decrypt user data from the token
      let decodedUser = jwtDecode(storeToken)

      //If the token is not valid or expired, user stays out
      if (!decodedUser || Date.now() > decodedUser.exp * 1000) {
          // console.log('Expired or Bad token')
          setUser(null)
      }
      else {
        console.log('User and token are good')
        // console.log('state at line 45', storeToken)
        setUser(decodedUser)
      }
    }
    else {
      //No user logged in
      // console.log('No user logged in')
      setUser(null)
    }
  }

  const updateToken = (newToken) => {
    localStorage.setItem('boilerToken', newToken || '')
    dispatch({
      type: 'CHANGE_AUTH',
      payload: {
        token: newToken
      }
    })

    decodeToken()
  }

  return (
    <Router>
      <div className="App">
        <Nav user={user} updateToken={updateToken} />
        <Header />
        <main>
          <Content user={user} updateToken={updateToken} />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
