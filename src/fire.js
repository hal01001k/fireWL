import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyA52pyAOJgMUCYcTKmW2Pgv4o_nG7RhZk8",
    authDomain: "login-14a98.firebaseapp.com",
    projectId: "login-14a98",
    storageBucket: "login-14a98.appspot.com",
    messagingSenderId: "643953093664",
    appId: "1:643953093664:web:517b7eae56e3b51e3fa045"
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
