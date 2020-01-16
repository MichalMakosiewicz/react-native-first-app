import React, { useState } from 'react';
import GoalItem from './GoalItem';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setenteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setenteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setenteredGoal('');
    };


    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '70%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 3,
        marginBottom: 5
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: 'space-between',
        width: '50%'
    },
    button: {
        width: '40%'
    }
});

export default GoalInput;