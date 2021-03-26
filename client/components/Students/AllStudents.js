import React,{useEffect} from 'react'
import {fetchStudentData} from './studentThunks'
import {connect} from 'react-redux'

const AllStudents =(props)=> {
    const {students, fetchStudentData} = props
    useEffect(()=>{
        fetchStudentData()
    },[])
    
    return (
        <div>
            {students.map(student=>(
               <div key={student.id}>
                    <div> First Name: {student.firstName}</div>
                    <div> Last Name: {student.firstName}</div>
                    <div> Email: {student.email}</div>
                    <div> Image </div>
                    <img src= {student.imageUrl}/>
                    <div> GPA: {student.gpa}</div>
              </div>
            ))}
        </div>
    )
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

