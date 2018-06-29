import actions from './actions';

export default function(dispatch, ownProps) {
    return {
        employeeUpdate: options => dispatch(actions.employeeUpdate(options)),
        employeeCreate: options => dispatch(actions.employeeCreate(options)),
        employeeSave: options => dispatch(actions.employeeSave(options)),
        employeeDelete: options => dispatch(actions.employeeDelete(options)),
        employeesFetch: () => dispatch(actions.employeesFetch())
    };
}
