import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const Verify = ({ navigation }) => {

    const [otp1, onChangeOTP1] = React.useState(null);
    const [otp2, onChangeOTP2] = React.useState(null);
    const [otp3, onChangeOTP3] = React.useState(null);
    const [otp4, onChangeOTP4] = React.useState(null);
    return(
      <View style={styles.container}>
  
        <Image
        style={styles.illustrationverify}
        source={{
          uri: 'https://i.ibb.co/SrJYXhp/image.png'
        }}
        />
        <Text style={styles.registerheading}>Check your</Text>
        <Text style={styles.registerheading1}>Inbox</Text>
  
        <Text style={{fontFamily: 'PoppinsRegular', marginTop: '5%'}}>A 4 digit pin has been sent to your email</Text>
        
        <View style={styles.row}>
  
          <TextInput
            style={styles.inputOTP}
            onChangeText={onChangeOTP1}
            value={otp1}
          />
  
          <TextInput
            style={styles.inputOTP}
            onChangeText={onChangeOTP2}
            value={otp2}
          />
        
          <TextInput
            style={styles.inputOTP}
            onChangeText={onChangeOTP3}
            value={otp3}
          />
  
          <TextInput
            style={styles.inputOTP}
            onChangeText={onChangeOTP4}
            value={otp4}
          />
  
        </View>
  
          <Pressable
            style={styles.regularbutton}
            onPress={() =>
              navigation.navigate('Dashboard')
            }
          >
            <Text style={styles.regularbuttontxt} >Proceed</Text>
          </Pressable>
          
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

    inputOTP: {
        backgroundColor: 'rgba(196, 196, 196, 0.15)',
        fontFamily: 'PoppinsSemiBold',
        borderRadius: '15px',
        height: 56,
        width: 56,
        marginRight: '1%',
        marginLeft: '1%',
        marginTop: '5%',
        marginBottom: '5%',
    },
    
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    regularbutton: {
        // width: '40%',
        // height: '5%',
        marginTop: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#6D0DB9',
        borderRadius: '10px',
    },
    
    regularbuttontxt: {
        color: '#FFFFFF',
        fontSize: '20px',
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

    illustrationverify: {
      width: '259px',
      height: '232px',
      marginBottom: '5%',
    },



    
    

});

export default Verify;