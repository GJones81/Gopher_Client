import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Profile = props => {

	let [secretMessage, setSecretMessage] = useState('')

	const storedToken = useSelector(state => state.token.token)

	let dispatch = useDispatch()

	useEffect(() => {
		fetch(process.env.REACT_APP_SERVER_URL + 'profile', {
			headers: {
				'Authorization': `Bearer ${storedToken}`
			}
		})
		.then(response => {
			// console.log('Response', response)

			if (!response.ok) {
				setSecretMessage('Nice try!')
				return
			}
			response.json()
			.then(result => {
				setSecretMessage(result.message)
			})
		})
		.catch(err => {
			console.log(err)
			setSecretMessage('No message for YOU!')
		})
	})

	// if (!storedToken) {
	// 	return <Redirect to="/login" />
	// }
  return (
    <div>
      <h2>{secretMessage}</h2>
    </div>
  )
}

export default Profile
