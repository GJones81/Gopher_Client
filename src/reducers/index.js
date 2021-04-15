import { combineReducers } from 'redux'

import authStatusReducer from './userAuthStatus'

export default combineReducers({
    token: authStatusReducer
})