import {SWITCH_VIEW,ITEMS_FETCH_DATA_SUCCESS,SWITCH_FILTER} from './actionTypes';

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


export function itemsFetchDataSuccess(items) {
    return {
        type: ITEMS_FETCH_DATA_SUCCESS,
        items
    };
}
