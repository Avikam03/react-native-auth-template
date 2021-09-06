import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Landing = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text>
          <Text style={styles.name1}>App</Text>
          <Text style={styles.name2}>Name</Text>
        </Text>
  
        <Pressable
          style={styles.regularbutton}
          onPress={() =>
            navigation.navigate('Register')
          }
        >
          <Text style={styles.regularbuttontxt} >Register</Text>
        </Pressable>

        <Pressable
          style={styles.regularbutton}
          onPress={() =>
            navigation.navigate('Login')
          }
        >
          <Text style={styles.regularbuttontxt} >Login</Text>
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

    name1: {
      color: 'black', 
      fontFamily: 'PoppinsBold',
      fontSize: 50,
    },
    
    name2: {
      color: '#6D0DB9',
      fontFamily: 'PoppinsBold',
      fontSize: 50,
    },

    illustration: {
      marginTop: '5%',
      width: 358,
      height: 259,
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
      // backgroundColor: '#6D0DB9',
      backgroundColor: '#000',
      color: '#FFFFFF',
      // fontSize: 20,
  },
  
  regularbuttontxt: {
      color: '#FFFFFF',
      fontSize: 20,
  },

});

export default Landing;