const initialState = []

function listReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_ITEM':
            return [...state, action.payload]
        case 'DELETE_ALL_ITEMS':
            return []
        default:
            return state
    }
}

export default listReducer