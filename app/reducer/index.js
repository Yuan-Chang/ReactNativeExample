import { loadingDynamicListViewReducer } from "./loadingDynamicListViewReducer"
import { combineReducers } from 'redux'

const appReducer = combineReducers({
    loadingDynamicHorizontalView: loadingDynamicListViewReducer
})

export default appReducer