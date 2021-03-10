import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import * as actions from '../../actions'

const Profile = props => {
	let [secretMessage, setSecretMessage] = useState('')
	let storeToken = useSelector(state => state)

	useEffect(() => {
		let token = localStorage.getItem('boilerToken')
		// console.log(token)
		console.log(storeToken)
		fetch(process.env.REACT_APP_SERVER_URL + 'profile', {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		})
		.then(response => {
			console.log('Response', response)

			if (!response.ok) {
				setSecretMessage('Nice try!')
				return
			}
			response.json()
			.then(result => {
				console.log(result)
				setSecretMessage(result.message)
			})
		})
		.catch(err => {
			console.log(err)
			setSecretMessage('No message for YOU!')
		})
	})

	if (!props.user) {
		return <Redirect to="/login" />
	}
  return (
    <div>
      <h2>{props.user.firstname}</h2>
      <img src={props.user.pic} alt={props.user.firstname} />
      <h2>{secretMessage}</h2>
    </div>
  )
}

export default Profile
