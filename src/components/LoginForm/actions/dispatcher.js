import actions from './actions';

export default function(dispatch, ownProps) {
    return {
        emailChanged: email => dispatch(actions.emailChanged(email)),
        passwordChanged: password =>
            dispatch(actions.passwordChanged(password)),
        loginUser: options => dispatch(actions.loginUser(options))
    };
}
