import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { VERIFY_TOKEN, VERIFY_TOKEN_SUCCESS } from './actionTypes'

export const verifyToken = () => (dispatch) => {
    dispatch({ type: VERIFY_TOKEN})

    const tokenVerificationURL = process.env.REACT_APP_SERVER_URL + 'profile'
    let storedToken = useSelector(state => state.token)

    fetch(tokenVerificationURL, { 
        headers: {
            'Authorization': `Bearer ${storedToken}`
        }
    })
    .then(response => {

        if(!response.ok){
            return
        }
        response.json()
        .then(result => {
            return dispatch({ type: VERIFY_TOKEN_SUCCESS, payload: result })
        })
    })
    .catch(err => {
        console.log(err)
        return <Redirect to='/login' />
    })
} 