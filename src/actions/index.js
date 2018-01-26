import {SWITCH_VIEW,ITEMS_FETCH_DATA_SUCCESS,GET_CAST,SWITCH_FILTER,GET_DETAIL} from './actionTypes';

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

export function getDetailSuccess(items) {
    return {
        type: GET_DETAIL,
        items
    };
}

export function getCastSuccess(items) {
    return {
        type: GET_CAST,
        items
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: ITEMS_FETCH_DATA_SUCCESS,
        items
    };
}
