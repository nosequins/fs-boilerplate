import {FETCH_STUDENTS} from './studentTypes'


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
        default: return state
    }

}