import {Detail} from '../route/Header';
import {addNewRemind} from '../actions';
import {getDetailRemind} from '../getfetchs/getListData';
import {connect } from 'react-redux';

const mapStateToProps = state =>{
    return {
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        addRemind: (id,dateremind) => {
            getDetailRemind(id,dateremind,dispatch,addNewRemind);
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Detail);