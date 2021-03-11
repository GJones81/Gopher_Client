
const initialState = 'Token is not in the store'

function authReducer(state = initialState, action){
    switch(action.type) {
        case 'CHANGE_AUTH':
            return action.payload
        default:
            return state
    }
}

export default authReducer