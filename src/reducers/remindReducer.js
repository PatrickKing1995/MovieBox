import { ADD_NEW_REMIND, DELETE_REMIND } from '../actions/actionTypes';

const remindReducers = (reminds = [], action) => {
    switch (action.type) {
        case ADD_NEW_REMIND:
            return [
                ...reminds,
                // {
                //     poster_path: action.item.poster_path,
                //     title: action.item.title,
                //     release_date: action.item.release_date,
                //     vote_average: action.item.vote_average,
                //     dateremind: action.date,
                //     deleted: false
                // }
            ]
        case DELETE_REMIND:
        return reminds.map(remind =>
            (remind.id === action.id) 
              ? {...remind, deleted: !remind.deleted}
              : reminds
          )
            
        default:
            return reminds; //state does not change
    }
}

export default remindReducers;