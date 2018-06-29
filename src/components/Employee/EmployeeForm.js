import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from './actions/dispatcher';

import { Picker, Text, View } from 'react-native';
import { Card, CardSection, Button, Input } from '../common';

class EmployeeForm extends Component {
    onNameChange = e => {
        const name = e.nativeEvent.text;
        this.props.employeeUpdate({ name });
    };

    onPhoneChange = e => {
        const phone = e.nativeEvent.text;
        this.props.employeeUpdate({ phone });
    };

    onShiftChange = shift => {
        this.props.employeeUpdate({ shift });
    };

    render() {
        const { name, phone, shift } = this.props;
        return (
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={name}
                        onBlur={this.onNameChange}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-5555"
                        value={phone}
                        onBlur={this.onPhoneChange}
                    />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={shift}
                        onValueChange={this.onShiftChange}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const mapStateToProps = (state, ownProps) => state.employees.form;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeForm);

const styles = {
    pickerTextStyle: { fontSize: 18, paddingLeft: 20 }
};
