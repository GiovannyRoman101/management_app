import React,{Component} from 'react'
import {Card, CardSection, Input, Button} from './common'
import {connect} from 'react-redux'

import {emailChanged, passwordChanged , loginUser} from '../actions'


class LoginForm extends Component{
	onEmailChange(text){
		this.props.emailChanged(text)
	}
	onPasswordChange(text){
		this.props.passwordChanged(text)
	}
	onButtonPress(){
		const {email,password} = this.props
		this.props.loginUser({email, password})
	}
	render(){
		return (
			<Card>
				<CardSection>
					<Input label= 'Email:' placeholder ='abc@gmail.com'
						// callback need to bind to this
						onChangeText ={this.onEmailChange.bind(this)}
						value = {this.props.email}></Input>
				</CardSection>

				<CardSection>
					<Input secureTextEntry 
						label= 'Password:' placeholder ='password'
						onChangeText ={this.onPasswordChange.bind(this)}
						value ={this.props.password}>
					</Input>
				</CardSection>

				<CardSection>
					<Button onPress = {this.onButtonPress.bind(this)}>Login</Button>
				</CardSection>
			</Card>
		)
	}
}
// state is a global variable for the application
const mapStateToProps =(state)=>{
	return {
		// auth because it is what the reducer is called
		email: state.auth.email,
		password: state.auth.password
	}
}
// it is null because we are not binding anything to state
// binds emailchanged to this.props
export default connect(mapStateToProps, {
	emailChanged, passwordChanged,loginUser
})(LoginForm)