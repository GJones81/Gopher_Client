import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const AllList = () => {

    const userFirstName = useSelector(state => state.userFirstName)

    const [ listTitle, setListTitle ] = useState('')

    return (
        <div>
            <h4>All of {userFirstName}'s Shopping Lists</h4>
            <label>Title for the new list:</label>
            <input value = {listTitle} onChange = {e => setListTitle(e.target.value)}/>
        </div>
    )
}

export default AllList