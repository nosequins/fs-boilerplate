import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {campusReducer} from './components/Campus/campusReducer'
import {studentReducer} from './components/Students/studentReducer'
const rootReducer= combineReducers({
    stud:studentReducer,
    camp:campusReducer
    
})
export const store= createStore(rootReducer, applyMiddleware(thunk))


//make sure "root" is right or change it
