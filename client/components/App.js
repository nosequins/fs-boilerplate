import React, { Component } from "react"
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from '../'
import Home from './Home/Home'
import AllCampuses from './Campus/AllCampuses'
import AllStudents from './Students/AllStudents'
import SingleStudent from './Students/SingleStudent'
import SingleCampus from './Campus/SingleCampus'
import EditCampus from './Campus/EditCampus'
import EditStudent from './Students/EditStudent'


class App extends Component{
	
	render(){
		return (
			
			<Provider store={store}>
				 <div id='nav'>
						<div>
							<Link to="/">Home</Link>
						</div>
						<div>
							<Link to="/campuses">Campus</Link>
							<Link to="/students">Students</Link>
						</div>
    			</div>
					<Switch>
						<Route exact path="/campuses" component={AllCampuses}/>
						<Route exact path="/students" component={AllStudents}/>
						<Route exact path="/students/:id"  component={SingleStudent}/>
						<Route exact path="/campus/:id"  component={SingleCampus}/>
						<Route exact path="/campus/:id/edit" component={EditCampus}/>
						<Route exact path="/students/:id/edit" component={EditStudent}/>
						<Route exact path="/" component={Home}/>
					</Switch>
			</Provider>
			)
	}
	
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));

