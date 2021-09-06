import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, Pressable } from 'react-native';

import Loading from './screens/Loading'
import Landing from './screens/Landing'
import Register from './screens/Register'
import Login from './screens/Login'
import Verify from './screens/Verify'
import Dashboard from './screens/Dashboard'

import * as Font from "expo-font";
import { useFonts } from "@use-expo/font"

import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";


var firebaseConfig = {
  //enter your firebase Configurations here
    apiKey: "AIzaSyC0vLizKG6flSfiYI8U82LwZn2JAc-iixE",
    authDomain: "react-native-auth-template.firebaseapp.com",
    projectId: "react-native-auth-template",
    storageBucket: "react-native-auth-template.appspot.com",
    messagingSenderId: "253805427594",
    appId: "1:253805427594:web:020b55c68f693553d86673"
};

firebase.initializeApp(firebaseConfig);

const customFonts = {
  PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
  PoppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
};

// stack navigation

const Stack = createStackNavigator();

export default function App() {
  useFonts(customFonts);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Loading"
          component={Loading}
        />
        <Stack.Screen
          name="Landing"
          component={Landing}
        />
        <Stack.Screen
         name="Register"
         component={Register}
        />
        <Stack.Screen
         name="Login"
         component={Login}
        />
        <Stack.Screen
         name="Verify"
         component={Verify}
        />
        <Stack.Screen
         name="Dashboard"
         component={Dashboard}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




// styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins',
  },

  normaltext:{
    fontFamily: 'PoppinsRegular',
  },
  
});

