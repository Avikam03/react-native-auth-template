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
npm install
```

3. Create a [Firebase](https://console.firebase.google.com/) Project 

4. Head over to the authentication tab on the console and enable the **Email/Password** Sign-in method

5. Create a Firestore Database by heading over to the **Firestore Database** tab

We're creating this database so that we can store information related to each specific user. Firebase only stores email address and password if you choose that method of authentication. To store other details like Name, Age, or any other user related data, you'd have to store the data in the database. Thus, we're using the firestore database in this template to store the Name of the User- that we make the user input on the Register page- and the role of the user, which in this case, is a standarduser. This is however completely customizable and you can add/remove properties according to your needs!

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
