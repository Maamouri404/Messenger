import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

function Welcome() {
    return (
        <View style={styles.container}>
            <Text>Welcome</Text>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c7c2c2',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Welcome
