import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import jwt_decode from 'jwt-decode'


  const useTokenDecode = () => {
    
    const storedToken = useSelector(state => state.token)  

    const dispatch = useDispatch()

    useEffect(() => {

        if (storedToken) { 
          
          let decodedUser = jwt_decode(storedToken)
          console.log(decodedUser)
          console.log(decodedUser.admin)
          console.log(decodedUser._id)
          console.log(decodedUser.firstname)
          console.log(decodedUser.lastname)
          
      
          if (!decodedUser || Date.now() > decodedUser.exp * 1000) {
              dispatch({ type: 'CHANGE_USER_STATUS', payload: '' })
              localStorage.clear()
          } else {
              console.log('User and token are good')
              dispatch({ type: 'SAVE_USER_ADMIN_STATUS', payload: decodedUser.admin })
              dispatch({ type: 'SAVE_USER_ID_NUM', payload: decodedUser._id})
              dispatch({ type: 'SAVE_USER_FIRSTNAME', payload: decodedUser.firstname})
              dispatch({ type: 'SAVE_USER_LASTNAME', payload: decodedUser.lastname})
            }
          }
          else {
            //No user logged in
            dispatch({ type: 'CHANGE_USER_STATUS', payload: '' })
            localStorage.clear()
          }
    })
  }
    
export default useTokenDecode