import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default(token) => {

    let [ secretMessage, setSecretMessage] = useState('')

    let token = useSelector(state => state.token.token)

	useEffect(() => {

		fetch(process.env.REACT_APP_SERVER_URL + 'profile', {
			headers: {
				'Authorization': `Bearer ${token}`
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
				// console.log(result)
				setSecretMessage(result.message)
			})
		})
		.catch(err => {
			console.log(err)
			setSecretMessage('No message for YOU!')
		})
	})
}