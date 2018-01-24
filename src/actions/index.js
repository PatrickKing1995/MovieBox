import {SWITCH_VIEW,GET_POPULAR,SWITCH_FILTER} from './actionTypes';

export const switchView = ()=>{
    return{
        type: SWITCH_VIEW,
    }
}
export const switchFilter = (nameFilter)=>{
    return{
        type: SWITCH_FILTER,
        nameFilter
    }
}
