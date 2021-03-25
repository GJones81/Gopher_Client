import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Nav = props => {

  const dispatch = useDispatch()

  let storedToken = useSelector(state => state.token.token)

  const handleLogout = e => {
    
    e.preventDefault()
    // Remove the token from localstorage (or cookies)
    // props.updateToken('')
    dispatch({ 
      type: 'CHANGE_AUTH', 
      payload: { 
        token: null 
      }
    })
    // TODO: Update the state of the App
  }

  let links = (
    <span>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
    </span>
  )

  // TODO: If the user is logged in, show profile page and logout links
  if (storedToken) {
    links = (
      <span>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <a href='/' onClick={handleLogout}>Logout</a>
        </li>
    </span>
    )
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {links}
      </ul>
    </nav>
  )
}

export default Nav
