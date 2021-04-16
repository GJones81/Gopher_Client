import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const useTokenVerify = () => {

    const storedToken = useSelector(state => state.token)
    console.log(storedToken)

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
                history.push('/')
            }
            response.json()
            .then(result => {
                console.log('result', result)
                return
            })
        })
        .catch(err => {
            console.log(err)
        })
    })
}

export default useTokenVerify