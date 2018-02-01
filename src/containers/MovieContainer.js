import MovieComponent from '../components/MovieComponent';
import {connect } from 'react-redux';
import {itemsFetchData} from '../getfetchs/getListData';
import {itemsFetchDataSuccess} from '../actions/index';
import {getDetail} from '../getfetchs/getListData';
import {getDetailSuccess} from '../actions/index'
import {getCastSuccess} from '../actions/index'
import {switchFilter} from '../actions';

const mapStateToProps = state =>{
    return {
        kindView: state.viewReducer.view,
        kindFilter: state.filterReducer.filter,
        items: state.itemsReducer,
        url: state.filterReducer.url,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        fetchData: (url) => {
            itemsFetchData(url,dispatch,itemsFetchDataSuccess )
        },
        fetchDetail: (id) => {
            getDetail(id,dispatch,getDetailSuccess,getCastSuccess )
        },
        onClickFilter: (filter)=>{
            dispatch(switchFilter(filter));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieComponent);