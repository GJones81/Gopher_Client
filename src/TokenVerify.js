import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const useTokenVerify = () => {

    const storedToken = useSelector(state => state.token)

    const dispatch = useDispatch()

    const history = useHistory()

    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_URL + 'profile', {
            headers: {
                'Authorization': `Bearer ${storedToken}`
            }
        })
        .then(response => {
            if(!response.ok){
                console.log('response', response)
                dispatch({ type: 'CHANGE_USER_STATUS', payload: '' })
                dispatch({ type: 'SAVE_USER_ADMIN_STATUS', payload: '' })
                dispatch({ type: 'SAVE_USER_ID_NUM', payload: ''})
                dispatch({ type: 'SAVE_USER_FIRSTNAME', payload: ''})
                dispatch({ type: 'SAVE_USER_LASTNAME', payload: ''})

                localStorage.clear()

                history.push('/')

                return false
            }
            response.json()
            .then(result => {
                console.log('result', result)
                return true
            })
        })
        .catch(err => {
            console.log(err)
        })
    })
}

export default useTokenVerify