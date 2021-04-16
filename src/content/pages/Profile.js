import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import useTokenVerify from '../../TokenVerify'
import useTokenDecode from '../../TokenDecode'

const Profile = props => {

	const storedToken = useSelector(state => state.token)

	const dispatch = useDispatch()

	const history = useHistory()

	useTokenVerify()

	useTokenDecode()

  return (
    <div>
      <h2>Profile Page</h2>
    </div>
  )
}

export default Profile
