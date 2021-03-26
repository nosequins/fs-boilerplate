
import {FETCH_CAMPUSES} from './campusTypes'

export const fetchCampuses=(campuses)=>{

    return {
        type: FETCH_CAMPUSES,
        payload: campuses
    }
}
