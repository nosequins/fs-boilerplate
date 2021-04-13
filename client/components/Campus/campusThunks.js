import axios from 'axios'
import {fetchCampuses, updateCampus, createCampus, deleteCampus} from './campusActions'

export const fetchCampusData =()=>{
    return async(dispatch)=>{
        try{
            const data= (await axios.get('http://localhost:3000/api/campuses')).data

            dispatch(fetchCampuses(data))

        }
        catch(err){
            console.log(err)
        }
    }
}
export const createCampusData=(campus)=>{
    return async (dispatch)=>{
        try{

            const data = await axios.post('http://localhost:3000/api/campuses', campus)
            /*you forgot to get specifically the data out of what is returned by axios
            so instead of the object you created, you are dispatching an object that represents the entire http request */
            dispatch(createCampus(data))
        }catch(er){
            console.log(er)
        }
    }
}
export const updateCampusData=(campus)=>{
    return async (dispatch)=>{
        try{

            const data= (await axios.put(`http://localhost:3000/api/campuses/${campus.id}`, campus)).data
            dispatch(updateCampus(data))
        }catch(er){
            console.log(er)
        }
    }
}
export const deleteCampusData=(id)=>{
    return async (dispatch)=>{
        try{

            const data= (await axios.delete(`http://localhost:3000/api/campuses/${id}`)).data
            dispatch(deleteCampus(data))
        }catch(er){
            console.log(er)
        }
    }
}
