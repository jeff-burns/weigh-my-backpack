import { combineReducers } from 'redux';
import formReducer from './formReducer';
import listReducer from './listReducer';

export default combineReducers({
    form: formReducer,
    list: listReducer
});
