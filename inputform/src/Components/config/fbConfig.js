
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD0GRwWQEOwX1PvUYW2qjkcVWa5D_n4NqE",
    authDomain: "enyechallenge.firebaseapp.com",
    databaseURL: "https://enyechallenge.firebaseio.com",
    projectId: "enyechallenge",
    storageBucket: "enyechallenge.appspot.com",
    messagingSenderId: "100188323215",
    appId: "1:100188323215:web:d5acb056c90e37210cdffa",
    measurementId: "G-91RFD3S5CC"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase;