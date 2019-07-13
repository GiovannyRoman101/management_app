import React,{Component} from 'react'
import {View,Text} from 'react-native'
import {Card, CardSection, Input, Button,Spinner} from './common'
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
	toggleButton(){
		if(this.props.loading){
			return (
				<Spinner size ='large'>
				</Spinner>
			)
		}else {
			return (
				<Button onPress = {this.onButtonPress.bind(this)}>Login</Button>
			)
		}
	}

	renderError(){
		if(this.props.errmsg){
			return(
				<View style ={{backgroundColor:'white'}}>
					<Text style = {styles.errorTextStyle}>
						{this.props.errmsg}
					</Text>
				</View>
			)
		}
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
				{this.renderError()}
				<CardSection>
					{this.toggleButton()}
				</CardSection>
			</Card>
		)
	}
}
const styles = {
	errorTextStyle:{
		fontSize:20,
		alignSelf:'center',
		color: 'red'
	}
}

// state is a global variable for the application
const mapStateToProps =({auth})=>{
	const {email, password,errmsg,loading} = auth
	return {
		// auth because it is what the reducer is called
		email,password,errmsg,loading
	}
}
// it is null because we are not binding anything to state
// binds emailchanged to this.props
export default connect(mapStateToProps, {
	emailChanged, passwordChanged,loginUser
})(LoginForm)