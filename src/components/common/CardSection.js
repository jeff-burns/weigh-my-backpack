import React, { Component } from 'react';
import { View } from 'react-native';

export default class CardSection extends Component {
    render() {
        const { style: propsStyle } = this.props;
        return (
            <View style={[styles.containerStyle, propsStyle]}>
                {this.props.children}
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};
