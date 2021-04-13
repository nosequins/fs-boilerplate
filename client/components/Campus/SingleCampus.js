import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {deleteCampusData, fetchCampusData} from'./campusThunks'
import {fetchStudentData, updateStudentData} from '../Students/studentThunks'


class SingleCampus extends Component{
    constructor(){
        super()
        this.state={loading:true,
        newStudent:{},

    }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    async componentDidMount(){
        const {fetchCampus, fetchStudents}= this.props;
        await Promise.all([fetchCampus(),fetchStudents()])
        this.setState({loading:false})
    }
    handleChange(e){

        const thisStudent=this.props.students.find(student=>student.id ==e.target.value)
        this.setState({newStudent:thisStudent})
    }
    handleSubmit(e){
        e.preventDefault()
        const addedToCampus={...this.state.newStudent,campusId: this.props.campus.id }
        this.props.updateStudent(addedToCampus)


    }
    render(){
        const {handleChange, handleSubmit}=this
        const { students, campus, deleteCampus } = this.props;
        //again really unclear naming
        let someStudents= students.filter(student=> student.campusId== campus.id)
        let notStudents= students.filter(student=> student.campusId !== campus.id)
        return(
            this.state.loading? <h1>Loading</h1>:
            <div>
                <div id='singleCampus'>
                    <div id='campusDirection'>
                        <div>
                            <img src={`/${campus.imageUrl}`}/>
                        </div>
                        <div>
                            {campus.address}
                        </div>
                    </div>
                    <div id='campusInfo'>

                        <h1>{campus.name}</h1>

                        <div>
                            {campus.description}
                        </div>
                        <div id='tools'>
                            <Link to={`/campus/${campus.id}/edit`} id='edit'>edit</Link>
                            <Link to="/campuses" onClick={()=>deleteCampus(campus.id)}>Delete</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>Students on campus</h1>
                </div>

                    {!someStudents.length? <div><div>There are no students currently registered to this campus.</div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <select name='id' value= {this.state.newStudent} onChange={handleChange}>
                                {notStudents.map(student=>(
                                    <option value={student.id}>{student.firstName} {student.lastName}</option>
                                ))}
                            </select>
                            <button>Add Students</button>
                        </form>
                    </div></div>:
                    <div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <select name='id' value={this.state.newStudent} onChange={handleChange}>
                                    {notStudents.map(student=>(
                                        <option value={student.id}>{student.firstName} {student.lastName}</option>
                                    ))}
                                </select>
                                <button>Add Students</button>
                            </form>
                        </div>
                        <div className='allStudents'>
                            {someStudents.map(student=>{
                                return (
                                    <div key={student.id}  className='student'>
                                        <Link to={`/students/${student.id}`}>
                                            <div>
                                                <img id="studentImg" src= {`/${student.imageUrl}`} width="50" height="50"/>
                                            </div>
                                            <div>
                                                {student.firstName} {student.lastName}
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    }

            </div>

        )
    }
}
const mapStateToProps=(state, OwnProps)=>{
    const campus= state.camp.campuses.find(campus=> campus.id== OwnProps.match.params.id)
    return{
        students:state.stud.students,
        campus
    }

}
const mapDispatchToProps=(dispatch)=>{
    return{
        fetchCampus:()=> dispatch(fetchCampusData()),
        fetchStudents:()=> dispatch(fetchStudentData()),
        updateStudent: (el)=> dispatch(updateStudentData(el)),
        deleteCampus: (el)=>dispatch(deleteCampusData(el))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus)
