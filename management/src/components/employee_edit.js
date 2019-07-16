import React,{Component} from 'react'
import {employeeUpdate} from '../actions'
import {connect} from 'react-redux'
import EmployeeForm from './employee_form'
import {Card,CardSection,Button} from './common'
import _ from 'lodash'

class EmployeeEdit extends Component{
	componentWillMount(){
		console.log(this.props)
		_.each(this.props.employee, (value,prop) =>{
			this.props.employeeUpdate({prop,value})
		})
	}
	onButtonPress(){

	}
	render(){
		return (
			<Card>
				<EmployeeForm></EmployeeForm>
				<CardSection>
					<Button onPress ={this.onButtonPress.bind(this)}>
						Save Changes
					</Button>
				</CardSection>
			</Card>
		)

	}
}

const mapStateToProps = (state) =>{
	const {name,phone,shift} = state
	return {name,phone,shift}
}

export default connect(mapStateToProps,{employeeUpdate})(EmployeeEdit)