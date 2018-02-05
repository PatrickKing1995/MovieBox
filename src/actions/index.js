import {SWITCH_VIEW,ITEMS_FETCH_DATA_SUCCESS,GET_CAST,SWITCH_FILTER,GET_DETAIL,DELETE_REMIND,ADD_NEW_REMIND,ITEMS_FETCH_DATA_TRATED} from './actionTypes';

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

export function itemsFetchDataTopRated(items) {
    return {
        type: ITEMS_FETCH_DATA_TRATED,
        items
    };
}


export const addNewRemind = (reminder,dateremind) => {
    return {
        type: ADD_NEW_REMIND,
        item: reminder,
        date: dateremind
    }
}

export const deleteRemind = (reminder) => {
    return {
        type: DELETE_REMIND,
        id: reminder.id
    }
}