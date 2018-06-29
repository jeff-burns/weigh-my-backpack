import { combineReducers } from 'redux';
import loginReducer from './components/LoginForm/reducers';
import employeeReducer from './components/Employee/reducers';

export default combineReducers({
    login: loginReducer,
    employees: employeeReducer
});
