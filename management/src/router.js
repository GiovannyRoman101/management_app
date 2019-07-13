import React from 'react'
import {Scene,Router} from 'react-native-router-flux'
import LoginForm from './components/login_form.js'
import EmployeeList from './components/employee_list.js'
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
							console.log('Right')
						}} 
						key = 'employeeList' 
						component ={EmployeeList} 
						title ='Employees'>
					</Scene>
				</Scene>
			</Scene>
		</Router>
	)
}

export default RouterComponent