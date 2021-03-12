import { combineReducers } from 'redux';
import currentUserReducer from './currentUserReducer';

const mainReducer = combineReducers({
        currentUser: currentUserReducer
})

export default mainReducer;