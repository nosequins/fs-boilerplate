import axios from 'axios'
import {fetchCampuses} from './campusActions'

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