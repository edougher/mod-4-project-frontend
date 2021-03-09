import { combineReducers } from 'redux';
import signUpReducer from './signup';

const mainReducer = combineReducers({
        signup: signUpReducer
})

export default mainReducer;