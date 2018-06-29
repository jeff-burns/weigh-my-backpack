import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';

import { Text, View, TouchableWithoutFeedback } from 'react-native';
import CardSection from './CardSection';

export default class ListItem extends Component {
    static propTypes = {
        item: PropTypes.shape({
            uid: PropTypes.string,
            name: PropTypes.string,
            phone: PropTypes.string,
            shift: PropTypes.string
        })
    };

    onPress = () => {
        const { item: employee } = this.props;
        Actions.employeeEdit({ employee });
    };

    render() {
        const {
            item: { name }
        } = this.props;

        return (
            <TouchableWithoutFeedback onPress={this.onPress}>
                <View>
                    <CardSection>
                        <Text style={styles.nameStyle}>{name}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    nameStyle: {
        paddingLeft: 15,
        fontSize: 18
    }
};
