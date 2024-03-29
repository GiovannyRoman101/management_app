import React,{Component} from 'react'
import {employeeUpdate,employeeSave,employeeDelete} from '../actions'
import {connect} from 'react-redux'
import Communications from 'react-native-communications'
import EmployeeForm from './employee_form'
import {Card,CardSection,Button,Confirm} from './common'
import _ from 'lodash'

class EmployeeEdit extends Component{
	state = {showModal:false}
	componentWillMount(){
		_.each(this.props.employee, (value,prop) =>{
			this.props.employeeUpdate({prop,value})
		})
	}
	onButtonPress(){
		const {name,phone,shift} = this.props
		this.props.employeeSave({name,phone,shift, uid: this.props.employee.uid})
	}
	onTextPress(){
		const {phone, shift} = this.props
		Communications.text(phone,`You schedule for next week is ${shift}`)
	}

	onAccept(){
		const {uid} = this.props.employee
		this.props.employeeDelete({uid})
	}

	onDecline(){
		this.setState({showModal:false})
	}

	render(){
		return (
			<Card>

				<EmployeeForm {...this.props}></EmployeeForm>

				<CardSection>
					<Button onPress ={this.onButtonPress.bind(this)}>
						Save Changes
					</Button>
				</CardSection>

				<CardSection>
					<Button onPress ={this.onTextPress.bind(this)}>
						Text Schedule
					</Button>
				</CardSection>

				<CardSection>
					<Button onPress = {()=>{
						this.setState({showModal: !this.state.showModal})
					}}>
						Fire
					</Button>
				</CardSection>

				<Confirm visible ={this.state.showModal}
					onAccept ={this.onAccept.bind(this)}
					onDecline ={this.onDecline.bind(this)}> 
					Are You Sure You Want To Fire?
				</Confirm>

			</Card>
		)

	}
}

const mapStateToProps = (state) =>{
	const {name,phone,shift} = state.employeeForm
	return {name,phone,shift}
}

export default connect(mapStateToProps,{
	employeeUpdate,employeeSave,employeeDelete})(EmployeeEdit)