import React from 'react';
import { Text, View, Modal } from 'react-native';
import CardSection from './CardSection';
import Button from './Button';

const Confirm = ({ children, onAccept, onDecline, visible = false }) => {
    return (
        <Modal
            animationType="slide"
            onRequestClose={() => {}}
            transparent
            visible={visible}
        >
            <View style={styles.container}>
                <CardSection style={styles.cardSection}>
                    <Text style={styles.text}>{children}</Text>
                </CardSection>
                <CardSection>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    );
};
export default Confirm;

const styles = {
    cardSection: { justifyContent: 'center' },
    text: { flex: 1, fontSize: 18, textAlign: 'center', lineHeight: 40 },
    container: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
};
