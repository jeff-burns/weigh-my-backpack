import actionTypes from '../actions/actionTypes';

const initialState = { name: '', phone: '', shift: '' };

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.employeeUpdate:
            return { ...state, ...action.payload };
        case actionTypes.employeeSaved:
            return initialState;
        default:
            return state;
    }
};
