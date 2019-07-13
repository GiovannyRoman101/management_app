import React ,{Component} from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import FireBaseConfig from './firebase_config.js'
import ReduxThunk from 'redux-thunk'
import Router from './router.js'
class App extends Component {
	componentDidMount(){
		FireBaseConfig()
	}
	render(){
		// 2nd arg is inital state
		const store = createStore(reducers,{},applyMiddleware(ReduxThunk))
		return (
			<Provider store ={store}>
				<Router></Router>
			</Provider>
		)
	}
}
export default App