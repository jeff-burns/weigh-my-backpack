import actionTypes from './actionTypes';
import { Actions } from 'react-native-router-flux';
import Firebase from '../../../Firebase';

const actions = {
    employeeUpdate: objectValue => ({
        type: actionTypes.employeeUpdate,
        payload: objectValue
    }),
    updateCurrentEmployee: ({ name, phone, shift }) => ({
        type: actionTypes.updateCurrentEmployee,
        payload: { name, phone, shift }
    })
};

// const loginUserFail = (dispatch, error) => {
//     dispatch({ type: actionTypes.loginUserFail, error });
// };

// const loginUserSuccess = (dispatch, user) => {
//     dispatch({
//         type: actionTypes.loginUserSuccess,
//         user
//     });

//     Actions.main();
// };

const employeeSaved = () => ({ type: actionTypes.employeeSaved });
const employeeFetchSuccess = employees => ({
    type: actionTypes.employeeFetchSuccess,
    employees
});

const createEmployeeList = uids =>
    Object.keys(uids).reduce(
        (accum, uid) => [...accum, { ...uids[uid], uid }],
        []
    );

const thunks = {
    employeeCreate: options => (dispatch, getState) => {
        Firebase.saveToDatabase(options)
            .then(() => {
                Actions.main({ type: 'reset' });
            })
            .then(() => {
                dispatch(employeeSaved());
            });
    },
    employeesFetch: () => (dispatch, getState) => {
        Firebase.fetchEmployees().on('value', snapshot => {
            const employees = createEmployeeList(snapshot.val() || []);
            dispatch(employeeFetchSuccess(employees));
        });
    },
    employeeSave: options => (dispatch, getState) => {
        Firebase.update(options)
            .then(() => {
                dispatch(employeeSaved());
            })
            .then(() => {
                Actions.main({ type: 'reset' });
            });
    },
    employeeDelete: ({ uid }) => (dispatch, getState) => {
        Firebase.delete(uid).then(() => {
            Actions.main({ type: 'reset' });
        });
    }
};

export default { ...actions, ...thunks };
