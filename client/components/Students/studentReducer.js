import {FETCH_STUDENTS, CREATE_STUDENT, UPDATE_STUDENT, DELETE_STUDENT} from './studentTypes'


const inititalState={
    students:[]
}

export const studentReducer=(state= inititalState, action)=>{
   
    switch(action.type){
        case FETCH_STUDENTS:
            return {
                ...state,
                students: action.payload
            }
        case CREATE_STUDENT:
            
            return{
                students: state.students.concat(action.payload)
            }
        case UPDATE_STUDENT:
            return{
                students: state.students.map(student=>(
                    student.id=== action.payload.id? action.payload: student
                ))
            }
        case DELETE_STUDENT:
            return{
                students: state.students.filter(student=>(
                    student.id != action.payload.id
                ))
            }
        default: return state
    }

}