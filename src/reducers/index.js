import { combineReducers } from 'redux';
import viewReducer from './viewReducer';
import filterReducer from './filterReducer'

const allReducers= combineReducers({
    viewReducer,
    filterReducer,
})

export default allReducers;