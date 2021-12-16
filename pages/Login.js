import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

function Login(props) {
    const [num, setNum] = React.useState("")
    const [password, setPassword] = React.useState("")

    return (
        <View style={styles.container}>
            <Image style={styles.topImage} source={require('../Assets/Images/top.png')} />
            <Text style={styles.welcomeTxt}>Hello Welcome back!</Text>
            <Text style={styles.signinTxt}>Sign In to continue</Text>
            <TextInput
                style={styles.inputNum}
                onChangeText={(e) => { setNum(e) }}
                value={num}
                placeholder="Phone number"
                keyboardType="numeric"
            ></TextInput>
            <TextInput
                style={styles.inputNum}
                onChangeText={(e) => { setPassword(e) }}
                value={password}
                placeholder="Password"
                keyboardType="numeric"
            ></TextInput>
            <View style={styles.forgotViex}>
                <Text>Forgot password?</Text>
            </View>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={{ color: 'white' }}>Log In</Text>
            </TouchableOpacity>
            <View style={styles.siggnupTxt}>
                <Text style={{ color: '#808080' }}>Don't have account?   <Text style={{ color: '#8E91F4' }}>Sign Up</Text></Text>
            </View>
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
        marginTop: -70
    },
    welcomeTxt: {
        fontSize: 24,
        color: '#1E2661',
        marginTop: 20
    },
    signinTxt: {
        fontSize: 16,
        color: '#B5B8CB',
        marginVertical: 10
    },
    inputNum: {
        width: '90%',
        backgroundColor: '#F0F1F5',
        height: 56,
        borderRadius: 15,
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    forgotViex:
    {
        width: '90%',
        height: 'auto',
        display: 'flex',
        alignItems: 'flex-end',
    },
    loginBtn: {
        width: '90%',
        height: 50,
        backgroundColor: '#8E91F4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 10,
    },
    siggnupTxt: {
        width: '90%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        marginTop: 10,
    }
});
export default Login
