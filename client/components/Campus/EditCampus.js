import React, {Component}from 'react'
import {connect} from 'react-redux'
import {fetchCampusData, updateCampusData} from './campusThunks'
import {fetchStudentData, updateStudentData} from '../Students/studentThunks'

class EditCampus extends Component{
    constructor(){
        super()
        this.state={
            campus:{},
            students:[],
            name:'',
            imageUrl:'',
            address:'',
            description:'',
            studentId:null
        }
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmitC= this.handleSubmitC.bind(this);
        this.handleSubmitS= this.handleSubmitS.bind(this)
    }
    async componentDidMount(){
        await Promise.all([this.props.fetchCampus(),this.props.fetchStudents()])
        const {name, imageUrl, address, description, campus, students}= this.state
        this.setState({name: this.props.campus.name, imageUrl:this.props.campus.imageUrl, address: this.props.campus.address, description: this.props.campus.description, campus:this.props.campus, students: this.props.students})
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    async handleSubmitC(e){
        e.preventDefault();
        this.props.updateCampus({name:this.state.name, imageUrl:this.state.imageUrl, address: this.state.address, description:this.state.description})

    }
    async handleSubmitS(e){
        console.log(e)
        e.preventDefault();
        const {students, studentId, campus}= this.state;
        let student= students.find(student=> student.id == studentId )
        this.props.updateStudent({...student, campusId: campus.id});
    }
    render(){
        const {campus, students}= this.state
        const studentsOnCampus= students.filter(student=> student.campusId === campus.id)
        const studentsNotOnCampus= students.filter(student=> student.campusId !== campus.id)
        const {handleSubmitC,handleSubmitS, handleChange}=this
        return(
            <div>
                <div>
                    <form id='editCampus' onSubmit={handleSubmitC}>
                        <label>Campus Name</label>
                        <input name='name' onChange={handleChange} value={campus.name}/>
                        <label>Campus Location</label>
                        <input name='address' onChange={handleChange} value={campus.address}/>
                        <label>Campus Image URL</label>
                        <input name='imageUrl' onChange={handleChange} value={campus.imageUrl}/>
                        <label>Campus Description</label>
                        <input name='description' id='description' onChange={handleChange} value={campus.description}/>
                        <button type='submit'>Save Changes</button>
                    </form>
                </div>
                <div>
                    <h2>Students On Campus</h2>
                    <form onSubmitS={handleSubmitS}>
                        <select value={this.state.studentId} onChange={handleChange} name='studentId'>
                            {studentsNotOnCampus.map(student=>(
                                <option value={student.id}>{student.firstName} {student.lastName}</option>
                            ))}
                        </select>
                        <button type='Submit'>Add To Campus</button>
                    </form>
                    {!students.length?
                    <div>
                        <p>There are no students currently registered to this campus.</p>
                    
                    </div>:
                        <div id='listOfStudents'>
                            {studentsOnCampus.map(student=>{
                                return (
                                    <div>
                                        <div>
                                            <img src={`/${student.imageUrl}`}/>
                                        </div>
                                        <div>
                                            <div>
                                                {student.firstName} {student.lastName}
                                            </div>
                                            <div>
                                                <div>remove from campus</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>}
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state, OwnProps)=>{
    const campus= state.camp.campuses.find(campus=> campus.id == OwnProps.match.params.id)
    return{
        campus,
        students:state.stud.students
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        fetchCampus: ()=>dispatch(fetchCampusData()),
        fetchStudents:()=>dispatch(fetchStudentData()),
        updateCampus: ()=>dispatch(updateCampusData()),
        updateStudent:()=>dispatch(updateStudentData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCampus)
