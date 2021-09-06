# React Native Firebase Authentication Template

Here's a simple template of a fullstack mobile application made with react native with the backend handled with google's Firebase API.

The App uses Firebase's Inbuilt Authentication using email address and password. It also uses the firestore database to store details about any account created while registering a user.

## Get Started
1. Clone this repository.
```
git clone git@github.com:Avikam03/react-native-auth-template.git
```

2. Install dependencies.
```
npm i
```

3. Create a [Firebase](https://console.firebase.google.com/) Project 

4. Head over to the authentication tab on the console and enable the **Email/Password** Sign-in method

5. Create a Firestore Database by heading over to the **Firestore Database** tab

6. Go to the settings of your application on Firebase and copy the firebase configurations.
They look something like this.

```js
const firebaseConfig = {
  apiKey: "ASfaSyC0vLizKSiFU%fjSI39F39lSfiYI8wZn2JAc-tt9r",
  authDomain: "react-native-auth-template.firebaseapp.com",
  projectId: "react-native-auth-template",
  storageBucket: "react-native-auth-template.appspot.com",
  messagingSenderId: "2538293742594",
  appId: "1:983805427594:web:020b55c92f693553d87673"
};
```

Paste them in `App.js` in the project.

You're All Set!

## Run the App

```
expo start
```
