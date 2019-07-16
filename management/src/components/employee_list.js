import React,{Component} from 'react'
import {connect} from 'react-redux'
import { FlatList} from 'react-native'
import {employeesFetch} from '../actions'
import ListItem from './list_item'

class EmployeeList extends Component {
	componentWillMount(){
		this.props.employeesFetch()
	}
	renderItem(employee){
		// console.log(employee.item)
		return <ListItem employee = {employee.item}/>
	}

	render(){
		return (
			<FlatList
				data ={this.props.employees}
				renderItem ={this.renderItem}
				keyExtractor = {(employee,index) => {return index.toString()}}>
			</FlatList>
		)
	}
}

const mapStateToProps = (state)=>{
	const employees = Object.keys(state.employees)
		.map(employeeKey => ({
			...state.employees[employeeKey],
			uid: employeeKey,
		}))
	return { employees }
	

}

export default connect(mapStateToProps,{employeesFetch})(EmployeeList)