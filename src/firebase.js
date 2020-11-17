import * as firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyCdbbzKyX6eSmvYulwqR4RGe4EEXZSe00Q",
    authDomain: "graphql-thomas-gil.firebaseapp.com",
    //databaseURL: "https://graphql-thomas-gil.firebaseio.com",
    projectId: "graphql-thomas-gil",
    storageBucket: "graphql-thomas-gil.appspot.com",
    //messagingSenderId: "3324897348",
    appId: "1:3324897348:web:3ca633771a2b8d346f3411",
    measurementId: "G-5SHCBZH4FV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 // firebase.analytics();
 export const auth=firebase.auth()
 export const googleAuthProvider=new firebase.auth.GoogleAuthProvider()