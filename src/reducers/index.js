import { combineReducers } from 'redux';
import viewReducer from './viewReducer';
import filterReducer from './filterReducer';
import itemsReducer from './itemsReducer';
import castReducer from './castReducer';
import detailReducer from './detailReducer';
import remindReducer from './remindReducer';

const allReducers= combineReducers({
    viewReducer,
    filterReducer,
    itemsReducer,
    detailReducer,
    castReducer,
    remindReducer,

})

export default allReducers;