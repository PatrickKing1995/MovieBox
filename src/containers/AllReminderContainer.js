import AllReminders from '../components/AllReminders';
import {connect } from 'react-redux';
import {addNewRemind} from '../actions/index'
import {deleteRemind} from '../actions/index'

const mapStateToProps = state =>{
    return {
        listRemind: !state.remindReducer ? [] : state.remindReducer
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllReminders);