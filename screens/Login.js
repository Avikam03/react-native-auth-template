import 'react-native-gesture-handler';
import React, { useState }  from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Alert} from "react-native";


import { login } from '../API/Firebasemethods'

// import firebase from 'firebase/app'
// import "firebase/auth";
// import "firebase/database";


const Login = ({ navigation }) => {

    const [email, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    const [errorMessage, onErrorMessage] = React.useState(null);


    function handlePress(){
        if (!email) {
            onErrorMessage("Email is required");
        } 
        else if(!email.includes("@") || !email.includes(".")){
            onErrorMessage("Email must be a valid email")
        }
        else if(!password) {
            onErrorMessage('Password is required.');
        } 
        else{
            login(email, password);
            navigation.navigate('Loading');
        }
        
        
      };

    return (
      <View style={styles.container}>
  
        <Image
          style={styles.illustrationreg}
          source={{
            uri:'https://i.ibb.co/jVBNmt5/image.png',
          }}
        />
  
        <Text style={styles.loginheading}>Login to your</Text>
        <Text style={styles.loginheading1}>Account</Text>
        
        <Text style={{color: "red"}}>{errorMessage}</Text>
  
        <Text style={styles.inputheading}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
        />

        <Text style={styles.inputheading}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={onChangePassword}
            value={password}
          />

        <Pressable
          style={styles.regularbutton}
          onPress={handlePress}
        >
          <Text style={styles.regularbuttontxt} >Proceed</Text>
        </Pressable>
  
        <StatusBar style="auto" />
      </View>
    );
  }
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Poppins',
    },

    regularbutton: {
        // width: '40%',
        // height: '5%',
        marginTop: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        elevation: 3,
        backgroundColor: '#6D0DB9',
        borderRadius: 10,
    },
    
    regularbuttontxt: {
        color: '#FFFFFF',
        fontSize: 20,
    },

    inputheading: {
        textAlign: 'left',
        marginTop: '4%',
        width: '67%',
        fontFamily: 'PoppinsRegular',
    },

    input: {
        height: '5%',
        width: '70%',
        backgroundColor: 'rgba(196, 196, 196, 0.15)',
        fontFamily: 'PoppinsRegular',
        borderRadius: '15px',
    },

    illustrationreg: {
        marginTop: '5%',
        height: 226,
        width: 225,
    },

    loginheading: {
        fontSize: 35,
        marginTop: '5%',
        fontFamily: 'PoppinsSemiBold',
    },
    
    loginheading1: {
        fontSize: 35,
        fontFamily: 'PoppinsSemiBold',
    },
    

});

export default Login;


// function handleLogin(){
    //   firebase
    //     .auth()
    //     .signInWithEmailAndPassword(email, password)
    //     .then(() => this.props.navigation.navigate("Dashboard"))
    //     .catch(error => onErrorMessage(error.message))
    // };