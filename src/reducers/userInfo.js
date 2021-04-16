const initialState = 'No user'

export function userAdminStatusReducer(state = initialState, action){
    switch(action.type){
        case 'SAVE_USER_ADMIN_STATUS':
            return action.payload
        default:
            return state
    }
}

export function userIDNumberReducer(state = initialState, action){
    switch(action.type){
        case 'SAVE_USER_ID_NUM':
            return action.payload
        default:
            return state
    }
}

export function userFirstNameReducer(state = initialState, action) {
    switch(action.type){
        case 'SAVE_USER_FIRSTNAME':
            return action.payload
        default:
            return state
    }
}

export function userLastNameReducer(state = initialState, action){
    switch(action.type){
        case 'SAVE_USER_LASTNAME':
            return action.payload
        default:
            return state
    }
}