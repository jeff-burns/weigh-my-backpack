import actionTypes from '../actions/actionTypes';

const initialState = {
    email: '',
    password: '',
    user: null,
    error: null,
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.emailChanged:
            return { ...state, email: action.email };
            return state;
        case actionTypes.passwordChanged:
            return { ...state, password: action.password };
            return state;
        case actionTypes.loginUser:
            return { ...state, user: action.user, error: '', loading: true };
        case actionTypes.loginUserSuccess:
            return {
                ...state,
                user: action.user,
                error: '',
                password: '',
                loading: false
            };
        case actionTypes.loginUserFail:
            return {
                ...state,
                error: action.error,
                password: '',
                loading: false
            };
        default:
            return state;
    }
};
