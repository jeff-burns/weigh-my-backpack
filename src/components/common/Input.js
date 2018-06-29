import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, View, Text } from 'react-native';

const Input = ({
    label,
    placeholder,
    value,
    onChangeText,
    onBlur,
    secureTextEntry
}) => (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            autoCorrect={false}
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
        />
    </View>
);

Input.propTypes = {
    onChangeText: PropTypes.func,
    onBlur: PropTypes.func
};

Input.defaultProps = {
    onChangeText: () => {},
    onBlue: () => {}
};

export default Input;

const styles = {
    input: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    label: { fontSize: 18, paddingLeft: 20, flex: 1 },
    container: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};
