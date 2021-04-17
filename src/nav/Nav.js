import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

const Nav = props => {

  const dispatch = useDispatch()

  const history = useHistory()

  const tokenStatus = useSelector(state => state.token)

  const handleLogout = e => {

    e.preventDefault()

    dispatch({ type: 'CHANGE_USER_STATUS', payload: '' })
    
    dispatch({ type: 'SAVE_USER_ADMIN_STATUS', payload: '' })
    dispatch({ type: 'SAVE_USER_ID_NUM', payload: ''})
    dispatch({ type: 'SAVE_USER_FIRSTNAME', payload: ''})
    dispatch({ type: 'SAVE_USER_LASTNAME', payload: ''})

    dispatch({ type: 'DELETE_ALL_LISTS', payload: []})

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

  // User Auth is controlled by State, but State is managed differently at different levels of the app
  // The Nav component renders at all levels, so it checks both the JWT in the Store and the State set
  // in the App component
  if (tokenStatus || props.userLoginStatus) {
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
