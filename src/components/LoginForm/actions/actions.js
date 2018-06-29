import actionTypes from './actionTypes';
import Firebase from '../../../Firebase';
import { Actions } from 'react-native-router-flux';

const actions = {
    emailChanged: email => ({ type: actionTypes.emailChanged, email }),
    passwordChanged: password => ({
        type: actionTypes.passwordChanged,
        password
    })
};

const loginUserFail = (dispatch, error) => {
    dispatch({ type: actionTypes.loginUserFail, error });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: actionTypes.loginUserSuccess,
        user
    });

    Actions.main();
};

const thunks = {
    loginUser: ({ email, password }) => (dispatch, getState) => {
        dispatch({ type: actionTypes.loginUser });

        Firebase.signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(err => {
                loginUserFail(dispatch, err);
                Firebase.createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(error => loginUserFail(dispatch, error));
            });
    }
};

export default { ...actions, ...thunks };
