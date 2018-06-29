import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import mapDispatchToProps from './actions/dispatcher';

import { Card, CardSection, Button, Input, Spinner } from '../common';
class LoginForm extends Component {
    onChangeEmail = text => {
        this.props.emailChanged(text);
    };

    onChangePassword = text => {
        this.props.passwordChanged(text);
    };

    onButtonPress = () => {
        const { email, password, loginUser } = this.props;
        loginUser({ email, password });
    };

    renderError() {
        return (
            <View style={{ backgroundColor: 'white' }}>
                <Text style={styles.error}>Authorization Error</Text>
            </View>
        );
    }

    renderButton = () =>
        this.props.loading ? (
            <Spinner size="small" />
        ) : (
            <Button onPress={this.onButtonPress}>Login</Button>
        );

    render() {
        const { email, password, error } = this.props;
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onChangeEmail}
                        value={email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onChangePassword}
                        value={password}
                    />
                </CardSection>
                {error && this.renderError()}
                <CardSection>{this.renderButton()}</CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state, ownProps) => state.login;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);

const styles = {
    error: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};
