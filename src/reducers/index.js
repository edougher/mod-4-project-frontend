import { combineReducers } from 'redux';
import signUpReducer from './signup';
import createApptForm from './apptForm';

const mainReducer = combineReducers({
        signup: signUpReducer,
        createApptForm: createApptForm

})

export default mainReducer;