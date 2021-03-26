import React, { Component } from "react"
import ReactDOM from "react-dom"
import {Provider} from 'react-redux'
import {store} from '../'
import AllCampuses from "./Campus/AllCampuses"
import AllStudents from "./Students/AllStudents"


//import any sub-components


class App extends Component{
	
	render(){
		return (
			<Provider store={store}>
				<div className='App'>
					<AllCampuses/>
					<AllStudents/>
				</div>
			</Provider>
			)
	}
	
}

ReactDOM.render(<App />, document.getElementById("root"));

