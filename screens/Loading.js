import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

export default class Loading extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user){
        function getUserRole(documentSnapshot) {
          return documentSnapshot.get('role');
        }
    
        firebase.firestore()
        .collection('users')
        .doc(user.uid)
        .get()
        .then(documentSnapshot => getUserRole(documentSnapshot))
        .then(role => {
        if (role == "standarduser"){
            this.props.navigation.navigate("Dashboard")
        }
        // else if (role=="admin"){
        //   this.props.navigation.navigate("AdminDashboard");
        // }
        });

      }else{
        this.props.navigation.navigate("Landing");
      }
      
    });
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large"/>
        <StatusBar style="auto" />
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Poppins',
    },

});
