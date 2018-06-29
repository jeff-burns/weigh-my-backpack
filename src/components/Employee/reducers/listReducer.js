import actionTypes from '../actions/actionTypes';

const initialState = { employees: [] };

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.employeeFetchSuccess:
            return { ...state, employees: action.employees };
        default:
            return state;
    }
};
