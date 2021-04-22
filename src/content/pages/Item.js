import React from 'react'
import { useDispatch } from 'react-redux'

const Item = (props) => {

    const dispatch = useDispatch()

    const handleDelete = e => {

        e.preventDefault()

        dispatch({ type: 'DELETE_ITEM', payload:{id: props.id, item: props.item}})

        dispatch({ type: 'REMOVE_ONE_ID_NUMBER', payload: props.id})
  
    }
    return (
        <div>
            {props.item}
            <button onClick = {handleDelete}>Delete</button>
        </div>
    )
}

export default Item