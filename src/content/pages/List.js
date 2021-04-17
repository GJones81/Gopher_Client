import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const List = props => {

    const allLists = useSelector(state => state.allLists.lists)

    allLists.forEach(list => {
        console.log(list.value)
    })

    let singleList = allLists.map((list,key) => {
        return (
            <li key={key}>{list.value}</li>
        )
    })
    
    return (
        <div>
            {singleList}
        </div>
    )
}

export default List