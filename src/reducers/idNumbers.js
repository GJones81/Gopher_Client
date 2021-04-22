const initialState = []

function itemIDNumberReducer(state = initialState, action) {
    switch(action.type){
        case 'SAVE_USED_ID_NUMBER':
            return [ ...state, action.payload ]
        case 'CLEAR_ID_NUMBERS':
            return action.payload
        default:
            return state
    }
}

export default itemIDNumberReducer