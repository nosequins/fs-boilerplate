
import {FETCH_CAMPUSES, CREATE_CAMPUS, UPDATE_CAMPUS,DELETE_CAMPUS} from './campusTypes'

const inititalState ={
    campuses:[]
}


export const campusReducer=(state= inititalState, action)=>{

    switch(action.type){
        case FETCH_CAMPUSES:
            return{
                ...state,
                campuses: action.payload
            }
        case CREATE_CAMPUS:
            return{
                ...state,
                campuses: state.campuses.concat(action.payload)
            }
        case UPDATE_CAMPUS:
            return{
                ...state,
                campuses: state.campuses.map(campus=>(
                    campus.id=== action.payload.id? action.payload: campus
                ))

            }
        case DELETE_CAMPUS:
            return{
                ...state,
                campuses: state.campuses.filter(campus=> campus.id != action.payload.id)
            }
        default: return state
    }

}