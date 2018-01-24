import MovieComponent from '../components/MovieComponent';
import {switchView, switchFilter} from '../actions';
import {connect } from 'react-redux';

const mapStateToProps = state =>{
    return {
        kindView: state.viewReducer.view,
        kindFilter: state.filterReducer.filter,
    }
}

export default connect(mapStateToProps)(MovieComponent);