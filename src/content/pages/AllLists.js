import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import List from './List'


const AllList = () => {

    const userFirstName = useSelector(state => state.userFirstName)

    const [ listTitle, setListTitle ] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = e => {

        e.preventDefault()
        dispatch({ type: 'CREATE_NEW_LIST', payload: listTitle})
        setListTitle('')
    }

    return (
        <div>
            <div>
                <h4>All of {userFirstName}'s Shopping Lists</h4>
                <label>Title for the new list:</label>
                <form onSubmit ={handleSubmit} >
                    <input value = {listTitle} onChange = {e => setListTitle(e.target.value)}/>
                    <button type = 'submit'>Create a List</button>
                </form>
               
            </div>
            <div>
                <List />
            </div>  
        </div>
    )
}

export default AllList