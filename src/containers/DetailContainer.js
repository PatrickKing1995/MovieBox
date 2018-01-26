import DetailComponent from '../components/DetailComponent';
import {connect } from 'react-redux';
import {getDetail} from '../getfetchs/getListData'
import {getDetailSuccess} from '../actions/index'

const mapStateToProps = state =>{
    return {
        detailFilm: state.detailReducer,
        castFilm: state.castReducer,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailComponent);