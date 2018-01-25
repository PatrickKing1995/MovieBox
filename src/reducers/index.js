import { combineReducers } from 'redux';
import viewReducer from './viewReducer';
import filterReducer from './filterReducer';
import itemsReducer from './itemsReducer';

const allReducers= combineReducers({
    viewReducer,
    filterReducer,
    itemsReducer,
})

export default allReducers;