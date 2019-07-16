import React,{Component} from 'react'
import {connect} from 'react-redux'
import {employeeUpdate} from '../actions'
import {CardSection,Input} from './common'
import {View,Text, Picker} from 'react-native'

class EmployeeForm extends Component {
	render(){
		return (
			<View>
				<CardSection>
					<Input label = 'Name' 
						placeholder ='Adam'
						value = {this.props.name}
						onChangeText = {(value) => {
							this.props.employeeUpdate({prop:'name',value})
						}}></Input>
				</CardSection>

				<CardSection>
					<Input label = 'Phone' 
						placeholder ='999-999-9999'
						value = {this.props.phone}
						onChangeText = {(value) => {
							this.props.employeeUpdate({prop:'phone',value})
						}}></Input>
				</CardSection>

				<CardSection >
					<Text style ={styles.pickerTextStyle}>Shift</Text>
					<Picker 
						style ={{flex:1}}
						selectedValue ={this.props.shift}
						onValueChange = {day => {
							this.props.employeeUpdate({prop:'shift',value:day})}
						}>
						<Picker.Item label = 'Monday' value ='Monday'></Picker.Item>
						<Picker.Item label = 'Tuesday' value ='Tuesday'></Picker.Item>
						<Picker.Item label = 'Wednesday' value ='Wednesday'></Picker.Item>
						<Picker.Item label = 'Thursday' value ='Thursday'></Picker.Item>
						<Picker.Item label = 'Friday' value ='Friday'></Picker.Item>
						<Picker.Item label = 'Saturday' value ='Saturday'></Picker.Item>
						<Picker.Item label = 'Sunday' value ='Sunday'></Picker.Item>
					</Picker>
				</CardSection>
			</View>
		)
	}
}

const styles = {
	pickerTextStyle:{
		fontSize: 18,
		paddingLeft: 20,
		paddingRight:5
		
	}
}

const mapStateToProps = (state) => {
	const {name, phone, shift} = state.employeeForm
	return {name,phone,shift}
}
export default connect (mapStateToProps,{employeeUpdate})(EmployeeForm)