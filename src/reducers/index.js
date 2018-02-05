import { combineReducers } from 'redux';
import viewReducer from './viewReducer';
import filterReducer from './filterReducer';
import itemsReducer from './itemsReducer';
import castReducer from './castReducer';
import detailReducer from './detailReducer';
import remindReducer from './remindReducer';
import topRatedReducer from './topRatedReducer';

const allReducers= combineReducers({
    viewReducer,
    filterReducer,
    itemsReducer,
    detailReducer,
    castReducer,
    remindReducer,
    topRatedReducer,

})

export default allReducers;