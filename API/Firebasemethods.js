import { Platform} from 'react-native';

import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/database";
import 'firebase/firestore';
import {Alert} from "react-native";

export async function registration(name, email, password) {
    try{
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const currentUser = firebase.auth().currentUser;
    
        const db = firebase.firestore();
        db.collection("users")
          .doc(currentUser.uid)
          .set({
            email: currentUser.email,
            name: name,
            role: 'standarduser',
          });
          navigation.navigate('Loading');
    }
    catch(err){
        if (Platform.OS === 'web') {
            alert(err.message)
         } else {
             Alert.alert(err.message)
         }

    }
}

export async function login(email, password) {
    try {
     await firebase.auth().signInWithEmailAndPassword(email, password);
        navigation.navigate('Loading');
    } catch (err) {
    //   onErrorMessage(err.message);
    Alert.alert(err.message)
    }
}

export async function logout() {
    firebase.auth().signOut();
}
