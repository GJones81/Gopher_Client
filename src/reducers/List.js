const initialState = []

const deleteItem = (array, action) => {
    return array.filter((item) => item.id !== action.payload.id)
}

function listReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_ITEM':
            return [...state, action.payload]
        case 'DELETE_ITEM':
            return deleteItem(state, action)
        case 'DELETE_ALL_ITEMS':
            return []
        default:
            return state
    }
}

export default listReducer