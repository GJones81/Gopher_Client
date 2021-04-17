import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import AllList from './AllLists'

import useTokenVerify from '../../TokenVerify'
import useTokenDecode from '../../TokenDecode'

const Profile = () => {

	const storedToken = useSelector(state => state.token)
	const userAdminStatus = useSelector(state => state.userAdminStatus)
	const userIDNumber = useSelector(state => state.userIDNumber)
	const userFirstName = useSelector(state => state.userFirstName)
	const userLastName = useSelector(state => state.userLastName)

	const dispatch = useDispatch()

	const history = useHistory()

	useTokenVerify()

	useTokenDecode()

  return (
    <div>
      <h2>Welcome {userFirstName} {userLastName}!</h2> 
	  <h3>Nice to see you again!</h3>
	  <AllList />
    </div>
  )
}

export default Profile
