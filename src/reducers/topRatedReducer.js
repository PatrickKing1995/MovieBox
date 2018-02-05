import {ITEMS_FETCH_DATA_TRATED} from '../actions/actionTypes'

const topRatedReducer = (state = [], action)=> {
    switch (action.type) {
        case ITEMS_FETCH_DATA_TRATED:
            return state.concat(action.items);
            // return action.items;
        default:
            return state;
    }
}

export default topRatedReducer;