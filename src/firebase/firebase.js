import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyCwHp8tkGXEeCHTk11H6-IkJKl1dON_CTI",
  authDomain: "firechat-113cc.firebaseapp.com",
  projectId: "firechat-113cc",
  storageBucket: "firechat-113cc.appspot.com",
  messagingSenderId: "915008297514",
  appId: "1:915008297514:web:f2efffa35f73cc4de70153",
  measurementId: "G-PLFJ0D2WJQ",
};
// Initialize Firebase
var fireDB = firebase.initializeApp(config);
export default fireDB.database().ref();
