import {ITEMS_FETCH_DATA_SUCCESS} from '../actions/actionTypes'

const itemsReducer = (state = [], action)=> {
    switch (action.type) {
        case ITEMS_FETCH_DATA_SUCCESS:
            // return state.concat(action.items);
            return action.items;
        default:
            return state;
    }
}

export default itemsReducer;