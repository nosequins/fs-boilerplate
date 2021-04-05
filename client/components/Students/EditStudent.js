

import React, {Component}from 'react'
import {connect} from 'react-redux'
import {fetchStudentData,updateStudentData} from './studentThunks'

class EditStudent extends Component{
    constructor(){
        super()
        this.state={
            loading:true,
            firstName:'',
            lastName:'',
            gpa:null,
            imageUrl:''
        }
        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }
    async componentDidMount(){
        
        await this.props.fetchStudent();
        this.setState({firstName:this.props.student.firstName,
        lastName: this.props.student.lastName, gpa: this.props.student.gpa,
        imageUrl: this.props.student.imageUrl})
        
    }
  
    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    async handleSubmit(e){
        e.preventDefault();
        await this.props.updateStudent({...this.props.student,...this.state});


    }
    render(){
        const {firstName, lastName, gpa, imageUrl}= this.state
        const {handleSubmit, handleChange}=this
        return(
            
            <div>
                <div>
                    <form id='editStudent' onSubmit={handleSubmit}>
                        <label>Student Firstname</label>
                        <input name='firstName' onChange={handleChange} value={firstName}/>
                        <label>Student Lastname</label>
                        <input name='lastName' onChange={handleChange} value={lastName}/>
                        <label>GPA</label>
                        <input name='gpa' onChange={handleChange} value={gpa}/>
                        <label>Student URL</label>
                        <input name='imageUrl' onChange={handleChange} value={imageUrl}/>
                        <button type='submit'>Save Changes</button>
                    </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state, OwnProps)=>{
    
    const student=state.stud.students.find(student=> student.id == OwnProps.match.params.id)
    return{
        student
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        fetchStudent:()=> dispatch(fetchStudentData()),
        updateStudent:(val)=>dispatch(updateStudentData(val))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditStudent)