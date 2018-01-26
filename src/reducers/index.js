import { combineReducers } from 'redux';
import viewReducer from './viewReducer';
import filterReducer from './filterReducer';
import itemsReducer from './itemsReducer';
import castReducer from './castReducer';
import detailReducer from './detailReducer';

const allReducers= combineReducers({
    viewReducer,
    filterReducer,
    itemsReducer,
    detailReducer,
    castReducer,

})

export default allReducers;