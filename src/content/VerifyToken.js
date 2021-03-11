import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

export default({children, props}) => {

	let [secretMessage, setSecretMessage] = useState('')

	let storedToken = useSelector(state => state.token)

	useEffect(() => {
		// let token = localStorage.getItem('boilerToken')
		// console.log(token)
		console.log(storedToken.token)
		fetch(process.env.REACT_APP_SERVER_URL + 'profile', {
			headers: {
				'Authorization': `Bearer ${storedToken.token}`
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

	if (!props.user) {
		return <Redirect to="/login" />
	}
    return (
        <VerifyToken>
            <children />
        </VerifyToken>
    )
}