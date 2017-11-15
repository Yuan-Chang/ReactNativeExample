import { userReducer } from "./loadUsersReducer"
import { combineReducers } from 'redux'

const appReducer = combineReducers({
    users: userReducer
})

export default appReducer