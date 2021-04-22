import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const List = () => {

    const userFirstName = useSelector(state => state.userFirstName)

    const itemList = useSelector(state => state.list)

    const [ itemName, setItemName ] = useState('')

    const dispatch = useDispatch()

    const handleListSubmit = e => {

        e.preventDefault()
        dispatch({ type: 'ADD_ITEM', payload: itemName})
        setItemName('')
    }

    const items = itemList.map((item,key) => {
        return <li key={key}>{item}</li>
    })

    return (
        <div>
            <div>
                <h4>{userFirstName}'s Shopping List</h4>
                <label>Add an item to the list:</label>
                <form onSubmit ={handleListSubmit} >
                    <input value = {itemName} onChange = {e => setItemName(e.target.value)}/>
                    <button type = 'submit'>Add an item</button>
                </form>
            </div>
            {items}
        </div>
    )
}

export default List