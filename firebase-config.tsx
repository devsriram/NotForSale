import firebase from 'firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCCFSDd2YE56LYifKHFt6VORvQxsM9zj-Y",
    authDomain: "not-for-sale-5c096.firebaseapp.com",
    projectId: "not-for-sale-5c096",
    storageBucket: "not-for-sale-5c096.appspot.com",
    messagingSenderId: "13447846341",
    appId: "1:13447846341:web:e4486810b0fa47f5f4d3ac",
    measurementId: "G-3L58JSTL1X"
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  export default firebase;