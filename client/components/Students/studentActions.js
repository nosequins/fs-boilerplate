import {FETCH_STUDENTS, CREATE_STUDENT, UPDATE_STUDENT, DELETE_STUDENT} from './studentTypes'

export const fetchStudent=(students)=>{

    return {
        type: FETCH_STUDENTS,
        payload: students
    }

}

export const createStudent=(student)=>{
    
    return{
        type: CREATE_STUDENT,
        payload: student
    }
}

export const updateStudent=(student)=>{
    return {
        type: UPDATE_STUDENT,
        payload: student
    }
}

export const deleteStudent=(student)=>{
    return {
        type: DELETE_STUDENT,
        payload: student
    }
}