import {combineReducers} from 'redux'
import AuthReducer from './auth_reducer.js'
export default combineReducers({
	auth: AuthReducer
})