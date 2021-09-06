import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { logout } from '../API/Firebasemethods';

import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const Dashboard = ({ navigation }) => {

    function handlePress(){
      logout();
      navigation.navigate('Loading');
    }

    const [name, setName] = React.useState(null);

    function getUserName(documentSnapshot) {
      return documentSnapshot.get('name');
    }

    const currentUser = firebase.auth().currentUser;
    firebase.firestore()
    .collection('users')
    .doc(currentUser.uid)
    .get()
    .then(documentSnapshot => getUserName(documentSnapshot))
    .then(name => {
      setName(name)
    });

    return(
      <View style={styles.container}>
  
          <Text style={styles.Heading}>Dashboard</Text>

          <Text>Welcome {name}!</Text>

          <Pressable
          style={styles.dashboardbutton}
          onPress={handlePress}
          >
          <Text style={styles.dashboardbuttontxt} >Logout</Text>
          </Pressable>

      </View> 
    )
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Poppins',
    },

    Heading: {
        color: '#6D0DB9',
        fontSize: '45px',
        fontFamily: 'PoppinsBold',
    },

    dashboardbutton: {
      width: '45%',
      height: '15%',
      marginTop: '5%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      elevation: 3,
      borderRadius: '21px',
      background: '#FEFEFE',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },

    dashboardbuttontxt: {
      color: '#000',
      fontSize: '25px',
      fontFamily: 'PoppinsSemiBold',
    },
    

});

export default Dashboard;