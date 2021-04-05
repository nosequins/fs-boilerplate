import axios from 'axios'
import {fetchStudent, createStudent, updateStudent, deleteStudent} from './studentActions'

export const fetchStudentData =()=>{
    return async(dispatch)=>{
        try{
            const data= (await axios.get('http://localhost:3000/api/students')).data
            
            dispatch(fetchStudent(data))
        }
        catch(err){
            console.log(err)
        }
    }
}

export const createStudentData=(student)=>{
    return async(dispatch)=>{
        try{
            const {data: created}= await axios.post('/api/students', student)
            dispatch(createStudent(created))
            
        }catch(er){
            console.log(er)
        }
    }
}

export const updateStudentData=(student)=>{
    return async (dispatch)=>{
        try{
            
            const data= (await axios.put(`http://localhost:3000/api/students/${student.id}`, student)).data
            dispatch(updateStudent(data))
        }catch(er){
            console.log(er)
        }
    }
}

export const deleteStudentData=(student)=>{
        return async(dispatch)=>{
            try{
                const data= (await axios.delete(`http://localhost:3000/api/students/${student}`).data)
                dispatch(deleteStudent(data))
            }catch(er){
                console.log(er)
            }
        }
}