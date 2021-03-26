import axios from 'axios'
import {fetchStudent} from './studentActions'

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