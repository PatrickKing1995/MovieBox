import FavoristComponent from '../components/FavoristComponent';
import {connect } from 'react-redux';
import {itemsFetchData} from '../getfetchs/getListData';
import {itemsFetchDataSuccess} from '../actions/index';
import {getDetail} from '../getfetchs/getListData';
import {itemsFetchTopRated} from '../getfetchs/getListData';
import {itemsFetchDataTopRated} from '../actions/index';
import {getDetailSuccess} from '../actions/index'
import {getCastSuccess} from '../actions/index'
import {switchFilter} from '../actions';

const mapStateToProps = state =>{
    return {
        kindView: state.viewReducer.view,
        kindFilter: state.filterReducer.filter,
        items: state.itemsReducer,
        itemsTopRated: state.topRatedReducer,
        url: state.filterReducer.url,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        fetchDetail: (id) => {
            getDetail(id,dispatch,getDetailSuccess,getCastSuccess )
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoristComponent);