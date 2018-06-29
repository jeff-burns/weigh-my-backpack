import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from './actions/dispatcher';

import { Card, Button, CardSection } from '../common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    onButtonPress = () => {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift });
    };

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress}>Create</Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state, ownProps) => state.employees.form;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeCreate);
