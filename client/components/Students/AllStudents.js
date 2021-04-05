import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {fetchStudentData} from './studentThunks'
import {connect} from 'react-redux'
import AddStudent from './AddStudent'


class AllStudents extends Component{
    constructor(){
        super();
        this.state={
            isAddStudentVisible:false,
        }
       
    }
    
    componentDidMount(){
        const {fetchStudentData}=this.props
        fetchStudentData();
    }

    
    render(){
        
        const {students}=this.props
        const {isAddStudentVisible}= this.state
        return (
            
                <div>
                    <div>
                        <h1 id='studentsTitle'>All Students</h1> 
                        <button onClick={()=>{this.setState({isAddStudentVisible: !isAddStudentVisible})}}>Add Student</button>
                        <div>
                            {isAddStudentVisible? <AddStudent/>: null}
                        </div>
                    </div>
                    
                    <div className='allStudents'>
                        {students.map(student=>(
                        <div key={student.id}  className='student'>
                            <Link to={`/students/${student.id}`}>
                                <div>
                                    <img id="studentImg" src= {student.imageUrl} width="50" height="50"/>
                                </div>
                                <div>
                                    {student.firstName} {student.lastName}
                                </div>
                            </Link>
                        </div>
                        ))}
                    </div>
                </div>
            
        
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        students: state.stud.students
    }
}
const mapDispatchToProps= dispatch=>{
    return {
        fetchStudentData: ()=> dispatch(fetchStudentData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents)

