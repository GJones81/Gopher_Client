const initialState = []

const deleteIDNumber = (array, action) => {
    return array.filter((item, index) => item !== action.payload)
}

function itemIDNumberReducer(state = initialState, action) {
    switch(action.type){
        case 'SAVE_USED_ID_NUMBER':
            return [ ...state, action.payload ]
        case 'REMOVE_ONE_ID_NUMBER':
            return deleteIDNumber(state, action)
        case 'REMOVE_ALL_ID_NUMBERS':
            return action.payload
        default:
            return state
    }
}

export default itemIDNumberReducer