// Packages
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Login = props => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const dispatch = useDispatch()

  // Event handlers
  const handleSubmit = e => {
    e.preventDefault()
    // console.log('submit', email, password, process.env.REACT_APP_SERVER_URL)
    // Fetch call to POST data
    fetch(process.env.REACT_APP_SERVER_URL + 'auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      //handle non-200 responses
      if(!response.ok) {
        return
      }
      //if we got a good response
      response.json().then(result => {
        dispatch({ type: 'CHANGE_USER_STATUS', payload: result.token })  
        props.props.changeUserLoginStatus(true) 
       })

    })
    .catch(err => {
      console.log('Error Submitting', err)
    })
  }

  if (props.props.userLoginStatus) {
    return <Redirect to="/profile" />
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="email" name="email" onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit">Log me in!</button>
        </form>
    </div>
  )
}

export default Login