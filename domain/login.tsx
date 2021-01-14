import React, { useState } from "react";
import { View, Text, SafeAreaView, Button, StyleSheet, TextInput } from "react-native";
import { getAppState } from "../redux/state-provider";
import { UserAction } from "../redux/user-reducer";

function LoginScreen(props) {
    const {
        state,
        dispatch
    } = getAppState();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


  const signIn = () => {
    if(email == "sriram" && password == "qwerty") {
        console.log("welcome")
        dispatch({type: UserAction.LOGIN_SUCCESS, payload: email})
    }
    else {
        console.log("sorry");
    }
  };


  return (
    <SafeAreaView>
        <View style={styles.container}>
        <TextInput
            placeholder = "Email"
            onChangeText = {(txt) => setEmail(txt)}
            autoCapitalize = "none"
            autoCorrect={false}
            style={styles.formInput} 
        />
        <TextInput
            placeholder = "password"
            onChangeText = {(txt) => setPassword(txt)}
            autoCapitalize = "none"
            autoCorrect={false}
            style={styles.formInput} 
        />
        </View>
        <Button title = "Login" onPress = {() => signIn()} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container : {
        alignItems : "center",
        paddingTop : 40
    },
    formInput : {
        borderBottomWidth : 1,
        marginBottom : 30,
        width : "90%",
        fontSize : 20
    }
})

export default LoginScreen;