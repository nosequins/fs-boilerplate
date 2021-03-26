
import {fetchCampuses} from './campusActions'
import {FETCH_CAMPUSES} from './campusTypes'

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
        default: return state
    }

}