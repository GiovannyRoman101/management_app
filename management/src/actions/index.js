import firebase from 'firebase'
import {EMAIL_CHANGED,PASSWORD_CHANGED,LOGIN_USER_SUCCESS} from './types.js'


export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	}
}

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	}
}
// TODO: need to handle error if password is incorrect and refactor
//		 login success
export const loginUser = ({email,password}) => {
	
	return (dispatch)=>{
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then((user) => {
				dispatch({type:LOGIN_USER_SUCCESS,user:user})
			})
			.catch(()=>{
				firebase.auth().createUserWithEmailAndPassword(email,password)
					.then((user) => {
						dispatch({type:LOGIN_USER_SUCCESS,user:user})
					})
			})
	}
}