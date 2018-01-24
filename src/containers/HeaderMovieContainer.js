import {MoviesHearder} from '../route/Header';
import {switchView,switchFilter} from '../actions';
import {connect } from 'react-redux';

const mapStateToProps = state =>{
    return {
        kindView: state.viewReducer.view,
        kindFilter: state.filterReducer.filter,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        onClickSwitch: ()=>{
            dispatch(switchView());
        },
        onClickFilter: (filter)=>{
            dispatch(switchFilter(filter));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(MoviesHearder);