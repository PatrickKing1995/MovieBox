import {GET_DETAIL} from '../actions/actionTypes'

const detailReducer = (state = [], action)=> {
    switch (action.type) {
        case GET_DETAIL:
            return action.items;
        default:
            return state;
    }
}

export default detailReducer;