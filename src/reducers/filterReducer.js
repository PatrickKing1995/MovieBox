import {SWITCH_FILTER} from '../actions/actionTypes';

const initialState = {
    filter: 'Popular',
    url: 'popular'
}

const filterReducer = (state=initialState, action)=>{
    switch(action.type){
        case SWITCH_FILTER:{
            if(action.nameFilter=='Popular') return {filter: action.nameFilter, url: 'popular'}
            else if(action.nameFilter=='Now Playing') return {filter: action.nameFilter, url: 'now_playing'}
            else if(action.nameFilter=='Top Rated') return {filter: action.nameFilter, url: 'top_rated'}
            else return {filter: action.nameFilter, url: 'upcoming'}
        }
        default:
        return state
    }
}

export default filterReducer;