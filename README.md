management_app

## Description

This project is a mobile management app that lets users that authenticates
users email and password. If the account is not registered, it will create it.
Once logged in, it will display the user's employees and gives them the option to edit or add employees. If the user taps an employee's name, they can edit, text them their schedule, or fire them. 

## Run Application
This application requires a firebase_config.js file to set up firebase.
```
	import firebase from 'firebase'

	const FireBaseConfig = ()=>{
		// Your web app's Firebase configuration
		const firebaseConfig = {
			apiKey: '',
			authDomain: '',
			databaseURL: '',
			projectId: '',
			storageBucket: '',
			messagingSenderId: '',
			appId: ''
	}
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig)
	
}

export default FireBaseConfig

```
To run the application, using npm to install teh node modules and react-native to run the simulation.

```
    npm install
    react-native run-android
```