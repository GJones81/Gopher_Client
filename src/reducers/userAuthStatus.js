
const initialState = 'No JWT in the store'

function authStatusReducer(state = initialState, action){
    switch(action.type) {
        case 'CHANGE_USER_STATUS':
            return action.payload
        default:
            return state
    }
}

export default authStatusReducer