import React ,{Component} from 'react'
import {View, Text } from 'react-native'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers'
import FireBaseConfig from './firebase_config.js'
import LoginForm from './components/login_form.js'
class App extends Component {
	componentDidMount(){
		FireBaseConfig()
	}
	render(){
		return (
			<Provider store ={createStore(reducers)}>
				<LoginForm>
					
				</LoginForm>
			</Provider>
		)
	}
}
export default App