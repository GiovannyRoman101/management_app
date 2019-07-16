import React, {Component} from 'react'
import {connect} from 'react-redux'
import {employeeUpdate,employeeCreate} from '../actions'
import {Card,CardSection,Button} from './common'
import EmployeeForm from './employee_form'

class EmployeeCreate extends Component{
	onButtonPress(){
		const {name,phone,shift} = this.props

		this.props.employeeCreate({name,phone,shift: shift ||'Monday'})
	}
	render(){
		// passes any props this Component has to employeeForm
		return (
			<Card>
				<EmployeeForm {...this.props}></EmployeeForm>
				<CardSection>
					<Button onPress ={this.onButtonPress.bind(this)}>Save</Button>
				</CardSection>
			</Card>
		)
	}
}

const mapStateToProps = (state) => {
	const {name, phone, shift} = state.employeeForm
	return {name,phone,shift}
}

export default connect(mapStateToProps , {employeeUpdate,employeeCreate})(EmployeeCreate)