// Import packages
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

// Resources and custom components
import './App.css';
import Content from './content/Content'
import Footer from './nav/Footer'
import Header from './nav/Header'
import Nav from './nav/Nav'

const App = props => {

  // const storedToken = useSelector(state => state.token)

  // const dispatch = useDispatch()

  // // useEffect hook
  // useEffect(() => {
  //   decodeToken()
  // },[])

  // const decodeToken = () => {
    
  //   if (storedToken) {
  //     //Decrypt user data from the token
  //     let decodedUser = jwtDecode(storedToken)

  //     //If the token is not valid or expired, user stays out
  //     if (!decodedUser || Date.now() > decodedUser.exp * 1000) {
  //         dispatch({ type: 'CHANGE_USER_STATUS', payload: null })
  //         localStorage.clear()
  //     }
  //     else {
  //       console.log('User and token are good')
  //       dispatch({ type: 'CHANGE_USER_STATUS', payload: decodedUser })
  //     }
  //   }
  //   else {
  //     //No user logged in
  //     // console.log('No user logged in')
  //     dispatch({ type: 'CHANGE_USER_STATUS', payload: null })
  //     localStorage.clear()
  //   }
  // }

  // const updateToken = (newToken) => {
  //   dispatch({ type: 'CHANGE_USER_STATUS', payload: newToken })

  //   decodeToken()
  // }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Header />
        <main>
          <Content />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
