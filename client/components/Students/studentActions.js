import {FETCH_STUDENTS} from './studentTypes'

export const fetchStudent=(students)=>{

    return {
        type: FETCH_STUDENTS,
        payload: students
    }

}