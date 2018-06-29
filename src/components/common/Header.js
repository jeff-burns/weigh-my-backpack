import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Header extends Component {
    render() {
        const { title } = this.props;
        const { textStyle, viewStyle } = styles;
        return (
            <View style={viewStyle}>
                <Text style={textStyle}>{title}</Text>
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};
