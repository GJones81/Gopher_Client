import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const List = () => {

    const userFirstName = useSelector(state => state.userFirstName)
    const itemIDNumberList = useSelector(state => state.itemIDNumbers)

    const itemList = useSelector(state => state.list)

    const [ itemName, setItemName ] = useState('')

    const dispatch = useDispatch()

    const randomNumberGenerator = () => {
         return Math.floor(Math.random() * 100000000)
    }

    const generateIDNumber = (numberList) => {
        let number = randomNumberGenerator()
        if (numberList.includes(number)){
            generateIDNumber()
        } else {
            return number
        }
    }

    const handleListSubmit = e => {

        e.preventDefault()

        const itemID = generateIDNumber(itemIDNumberList)
        
        dispatch({ type: 'ADD_ITEM', payload:{id: itemID, item: itemName} })

        dispatch({ type: 'SAVE_USED_ID_NUMBER', payload: itemID })

        setItemName('')
    }

    const items = itemList.map((item,key) => {
        return <li key={item.id}>{item.item}</li>
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