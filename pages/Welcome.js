import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

function Welcome(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.headImg} source={require('../Assets/Images/top_content.png')} />
            <Image style={styles.slider} source={require('../Assets/Images/slider_indicator.png')} />
            <Text style={styles.headTxt}>Let's connect with your friends</Text>
            <TouchableOpacity style={styles.startBtn} onPress={() => { props.navigation.navigate('Login') }}>
                <Text style={styles.btnStartText}>Start Chatting!</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F1F5',
        alignItems: 'center',
        //justifyContent: 'center',
    },
    headImg: {
        width: '100%',
        height: '60%',
        marginTop: 50
    },
    slider: {
        width: 101,
        height: 6,
        marginTop: 30
    },
    headTxt: {
        color: '#1E2661',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20
    },
    startBtn: {
        backgroundColor: '#8E91F4',
        width: 324,
        height: 50,
        marginTop: 20,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnStartText: {
        color: 'white',
        fontSize: 16
    }
});
export default Welcome
