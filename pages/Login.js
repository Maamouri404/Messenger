import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

function Login(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.topImage} source={require('../Assets/Images/top.png')} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    topImage: {
        width: 536,
        height: 376,
    }
});
export default Login
