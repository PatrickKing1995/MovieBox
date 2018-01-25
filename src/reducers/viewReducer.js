import {SWITCH_VIEW} from '../actions/actionTypes';

const initialState = {
    view: false,
}

const viewReducer = (state=initialState, action)=>{
    switch(action.type){
        case SWITCH_VIEW:
            return {
                view: !state.view,
            };
        default:
            return state;
    }
}

export default viewReducer;