import React, { Component } from 'react';
import { ScrollView } from 'react-native';

export default class Card extends Component {
    render() {
        return (
            <ScrollView style={styles.containerStyle}>
                {this.props.children}
            </ScrollView>
        );
    }
}

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};
