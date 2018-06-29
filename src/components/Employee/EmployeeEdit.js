import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from './actions/dispatcher';
import Comms from 'react-native-communications';

import { Card, Button, CardSection, Confirm } from '../common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    state = { showModal: false };

    componentWillMount() {
        const { employee } = this.props;
        this.props.employeeUpdate({ ...employee });
    }

    onFireEmployee = () => {
        const { showModal } = this.state;
        this.setState({ showModal: !showModal });
    };

    onAcceptFire = () => {
        this.setState({ showModal: false });
        const {
            employee: { uid }
        } = this.props;
        this.props.employeeDelete({ uid });
    };

    onDeclineFire = () => {
        this.setState({ showModal: false });
    };

    onButtonPress = () => {
        const {
            name,
            phone,
            shift,
            employee: { uid }
        } = this.props;
        this.props.employeeSave({ name, phone, shift, uid });
    };

    onTextPress = () => {
        const { phone, shift } = this.props;
        Comms.text(phone, `Your upcoming schedule is ${shift}`);
    };

    render() {
        const { showModal } = this.state;
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress}>Save Changes</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress}>Text Schedule</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onFireEmployee}>Fire Employee</Button>
                </CardSection>
                <Confirm
                    visible={showModal}
                    onAccept={this.onAcceptFire}
                    onDecline={this.onDeclineFire}
                >
                    Are you sure you want to fire this person?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state, ownProps) => state.employees.form;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeEdit);
