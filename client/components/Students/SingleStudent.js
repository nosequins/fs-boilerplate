
import React,{ Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchCampusData} from '../Campus/campusThunks'
import {fetchStudentData,updateStudentData, deleteStudentData} from './studentThunks'




class SingleStudent extends Component{
    constructor(){
        super()
        this.state={
            campusId:null,
            loading: true
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    
    async componentDidMount(){
       
        await Promise.all([this.props.fetchStudents(),this.props.fetchCampuses(),])
        this.setState({loading:false}) 
        
    }
    
    handleChange(e){
       
        this.setState({[e.target.name]:e.target.value})
        
    }
    async handleSubmit(e){

        e.preventDefault();
        const {campusId}= this.state
        const newCollege= {...this.props.student,campusId}
        this.props.updateStudent(newCollege)

    }
    render(){
   
    const {student, campuses, deleteStudent}= this.props;
    const {handleChange, handleSubmit}= this;

    let campus={};
    if(campuses.filter(campus=> campus.id === student.campusId)[0]){
        campus=campuses.filter(campus=> campus.id === student.campusId)[0]
        
    }
    
    
   
    return (
        this.state.loading? <h1>Loading</h1>:
        <div>
            <div>
                <div>
                    <img src={`/${student.imageUrl}`} width="300" height="300"/>

                </div>
                <div>
                    <div>
                        <div>
                            <h1>{student.name}</h1>
                        </div>
                        <div>
                            GPA:{student.gpa}
                        </div>
                    </div>
                    <div>
                        <Link to={`/students/${student.id}/edit`}>Edit</Link>
                        <Link to="/students" onClick={()=>deleteStudent(student.id)}>Delete</Link>
                    </div>
                </div>
            </div>
            <div>
                {Object.keys(campus).length?
                <div>
                        <p>This student is registered to a campus</p>
                    <div>
                        <div key={campus.id} className='campus'> 
                            <div>
                                <img src={`/${campus.imageUrl}`} width="50" height="50"/>
                            </div>
                            <div id='contents'>
                                <div>
                                    <div>{campus.name}</div>
                                    <div> {1}</div>
                                </div>
                                <div id='change'>
                                    <div >edit</div>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>    
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <select name='campusId' value={this.state.campusId} onClick={handleChange}>
                                {campuses.map(campus=>{
                                    return(
                                        <option value={campus.id}>{campus.name}</option>
                                    )
                                })}
                            </select>
                            <button>Change Campus</button>
                        </form>
                    </div>
                </div>:
                 <div>
                     <div>
                     This student is not registered to a campus
                     </div>
                     <div>
                        <form onSubmit={handleSubmit}>
                            <select name='campusId' value={this.state.campusId} onChange={handleChange}>
                                {campuses.map(campus=>{
                                    return(
                                        <option value={campus.id}>{campus.name}</option>
                                    )
                                })}
                            </select>
                            <button>Add to Campus</button>
                        </form>
                     </div>
                </div>
                
                
                    }
            </div>
        </div>
    )
    }
    

    
}
const mapStateToProps=(state, OwnProps)=>{
    
    const student= state.stud.students.find(student=>student.id==OwnProps.match.params.id)
    return{
        student,
        campuses: state.camp.campuses
    }

}
const mapDispatchToProps=(dispatch)=>{
    return{
        fetchCampuses:()=> dispatch(fetchCampusData()),
        fetchStudents:()=> dispatch(fetchStudentData()),
        updateStudent:(some)=>dispatch(updateStudentData(some)),
        deleteStudent: (some)=>dispatch(deleteStudentData(some))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SingleStudent)
