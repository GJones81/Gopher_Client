import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default(token, props) => {

    let [user, setUser] = useState(null)

    const token = useSelector(state => state.token)

    useEffect(() => {
        if (token) {
            //Decrypt user data from the token
            let decodedUser = jwtDecode(token)
    
            //If the token is not valid or expired, user stays out
            if (!decodedUser || Date.now() > decodedUser.exp * 1000) {
                // console.log('Expired or Bad token')
                setUser(null)
            }
            else {
            console.log('User and token are good')
            setUser(decodedUser)
            }
        }
        else {
            //No user logged in
            // console.log('No user logged in')
            setUser(null) 
        })
    }

}