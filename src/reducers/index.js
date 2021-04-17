import { combineReducers } from 'redux'

import authStatusReducer from './userAuthStatus'
import { userAdminStatusReducer, userIDNumberReducer, userFirstNameReducer, userLastNameReducer } from './userInfo'
import allListsReducer from './AllLists'

export default combineReducers({
    token: authStatusReducer,
    userAdminStatus: userAdminStatusReducer,
    userIDNumber: userIDNumberReducer,
    userFirstName: userFirstNameReducer,
    userLastName: userLastNameReducer,
    allLists: allListsReducer
})