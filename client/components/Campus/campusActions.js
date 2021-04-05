
import {FETCH_CAMPUSES, CREATE_CAMPUS, DELETE_CAMPUS, UPDATE_CAMPUS} from './campusTypes'

export const fetchCampuses=(campuses)=>{

    return {
        type: FETCH_CAMPUSES,
        payload: campuses
    }
}
export const createCampus=(campus)=>{
    return {
        type: CREATE_CAMPUS,
        payload: campus
    }
}

export const deleteCampus=(campus)=>{
    return {
        type: DELETE_CAMPUS,
        payload: campus
    }
}

export const updateCampus=(campus)=>{
    return {
        type: UPDATE_CAMPUS,
        payload: campus
    }
}