import {SWITCH_FILTER} from '../actions/actionTypes';

const initialState = {

}

const filterReducer = (state=initialState, action)=>{
    switch(action.type){
        case SWITCH_FILTER:
            return {
                filter: action.nameFilter,
            }
        default:
            return state;
    }
}

export default filterReducer;