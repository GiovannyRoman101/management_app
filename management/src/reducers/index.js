import {combineReducers} from 'redux'
import AuthReducer from './auth_reducer.js'
import EmployeeFormReducer from './employee_form_reducer.js'
import EmployeesReducer from './employees_reducer.js'
export default combineReducers({
	auth: AuthReducer,
	employeeForm: EmployeeFormReducer,
	employees: EmployeesReducer
})