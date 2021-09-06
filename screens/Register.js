import 'react-native-gesture-handler';
import React, { useState }  from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Alert} from "react-native";

import { registration } from '../API/Firebasemethods';

const Register = ({navigation: { navigate }}) => {

    const [name, onChangeName] = React.useState(null);
    const [email, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
      
    function handlePress(){
      if (!name) {
        if (Platform.OS === 'web') {
          alert("Name is required!")
        } else {
           Alert.alert("Name is required!")
        }
      } 
      else if (!email) {
        if (Platform.OS === 'web') {
          alert("Email is required!")
        } else {
           Alert.alert("Email is required!")
        }
      } 
      else if(!email.includes("@") || !email.includes(".")){
        if (Platform.OS === 'web') {
          alert("Email must be a valid email")
        } else {
           Alert.alert("Email must be a valid email")
        }
      }
      else if (!password) {
        if (Platform.OS === 'web') {
          alert("Password is required!")
        } else {
           Alert.alert("Password is required!")
        }
      } else {
        registration(
          name,
          email,  
          password,
        );
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
  
        <Text style={styles.registerheading}>Create</Text>
        <Text style={styles.registerheading1}>Account</Text>
        
        {/* <Text style={{color: "red"}}>{errorMessage}</Text> */}

        <Text style={styles.inputheading}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
        />
  
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
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#6D0DB9',
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
        fontFamily: 'PoppinsSemiBold',
        borderRadius: '15px',
    },

    illustrationreg: {
        marginTop: '5%',
        height: 226,
        width: 225,
    },

    registerheading: {
        fontSize: 35,
        marginTop: '5%',
        fontFamily: 'PoppinsSemiBold',
    },
    
    registerheading1: {
        fontSize: 35,
        fontFamily: 'PoppinsSemiBold',
    },
    

});

export default Register;


