import {GET_CAST} from '../actions/actionTypes'

const castReducer = (state = [], action)=> {
    switch (action.type) {
        case GET_CAST:
            return action.items;
        default:
            return state;
    }
}

export default castReducer;