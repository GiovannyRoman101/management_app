import React from 'react'
import {Scene,Router, Actions} from 'react-native-router-flux'
import LoginForm from './components/login_form'
import EmployeeList from './components/employee_list'
import EmployeeCreate from './components/employee_create'
import EmployeeEdit from './components/employee_edit'
const RouterComponent = () => {
	return (
		<Router>
			<Scene key='root' hideNavBar>
				<Scene key = 'auth'>
					<Scene key = 'login' component ={LoginForm} 
						title ='Login' initial>
					</Scene>
				</Scene>

				<Scene key = 'main'>
					<Scene
						rightTitle = 'Add'
						onRight ={()=>{
							Actions.employeeCreate()
						}} 
						key = 'employeeList' 
						component ={EmployeeList} 
						title ='Employees' initial>
					</Scene>
					<Scene key ='employeeCreate' 
						title ='Create Employee'
						component ={EmployeeCreate}>
					</Scene>
					<Scene key = 'employeeEdit' component ={EmployeeEdit} title = 'Edit Employee'></Scene>
				</Scene>
			</Scene>
		</Router>
	)
}

export default RouterComponent