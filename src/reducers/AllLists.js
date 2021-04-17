const initialState = {
    lists: []
}

function allListsReducer(state = initialState, action){
    switch(action.type){
        case 'CREATE_NEW_LIST':
            return { ...state, lists : [ ...state.lists, { value: action.payload } ]
            }
        case 'DELETE_ALL_LISTS':
            return { lists: [] }
        default:
            return state
    }
}

export default allListsReducer