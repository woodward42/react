import firebase from 'firebase/compat';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANME5k0phY9h0tHWWdSUJ4HXFTXwXnt0I",
    authDomain: "gb-chat-191a3.firebaseapp.com",
    databaseURL: "https://gb-chat-191a3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gb-chat-191a3",
    storageBucket: "gb-chat-191a3.appspot.com",
    messagingSenderId: "1016583536789",
    appId: "1:1016583536789:web:e8f751c858a988d087db9c"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig);