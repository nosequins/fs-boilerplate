import React, {Component} from 'react'
import {createStudentData} from './studentThunks'
import {connect} from 'react-redux'

class AddStudent extends Component{

    constructor(){
        super();
        this.state={firstName:"",
        lastName:"",
        email:"",
        gpa:1}
        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }
    
    handleChange(ev){
        this.setState({[ev.target.name]: ev.target.value})
    }
    async handleSubmit(ev){
        ev.preventDefault();
        this.props.createStudent({...this.state})

    }
    render(){
        const {firstName, lastName, email, gpa}= this.state
        const {handleChange, handleSubmit}= this
        return(
            <div>
                <h1>Student</h1>
                <form id="createStudent" onSubmit={handleSubmit}>
                    <label for="firstName">First Name</label>
                    <input type="text" name ="firstName" title="First Name" value={firstName} onChange={handleChange}/>
                    <label for="lastname">Last Name</label>
                    <input type="text" name ="lastName" title="Last Name" value={lastName} onChange={handleChange} />
                    <label for="email">Email</label>
                    <input type="text" name ="email" title="Email" value={email} onChange={handleChange}/>
                    <label for="gpa">GPA</label>
                    <input type="text" name ="gpa" title="GPA" value={gpa} onChange={handleChange}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }

}
const mapDispatchToProps=(dispatch)=>{
    return{
        createStudent: (stud)=>( dispatch(createStudentData(stud)))
          }
}
export default connect(null, mapDispatchToProps)(AddStudent)
   