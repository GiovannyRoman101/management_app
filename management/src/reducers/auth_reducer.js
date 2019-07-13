import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAILED,
	LOGIN_USER
} from '../actions/types.js'

const INITIAL_STATE ={
	email:'',
	password:'',
	user: null,
	errmsg:'',
	loading:false
}

export default (state = INITIAL_STATE,action)=>{
	switch(action.type){
		case EMAIL_CHANGED:
			return {...state, email: action.payload, errmsg:''}
		case PASSWORD_CHANGED:
			return {...state, password: action.payload, errmsg:''}
		case LOGIN_USER:
			return {...state, loading: true, errmsg:''}
		case LOGIN_USER_SUCCESS:
			return {...state, ...INITIAL_STATE, user: action.payload }
		case LOGIN_USER_FAILED:
			return {...state,errmsg: 'Authenication Failed.', password:'', loading: false}
		default:
			return state
	}
}