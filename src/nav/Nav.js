import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

const Nav = props => {

  const dispatch = useDispatch()

  const history = useHistory()

  const handleLogout = e => {

    e.preventDefault()

    dispatch({ type: 'CHANGE_USER_STATUS', payload: null })

    localStorage.clear()

    props.changeUserLoginStatus(false)

    history.push('/')
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

  if (props.userLoginStatus === true) {
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
