import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

function Home(props) {
    return (
        <View style={styles.container}>
            <Text>Finally the App is working!</Text>
            <Button title="hi" onPress={() => props.navigation.navigate('Welcome')}>go home</Button>
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
export default Home
