// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW81lahswPjmLhTqvLCJW8cMgVu6so7IE",
  authDomain: "login-61446.firebaseapp.com",
  projectId: "login-61446",
  storageBucket: "login-61446.appspot.com",
  messagingSenderId: "692042186958",
  appId: "1:692042186958:web:d4738beea12e5e1405109f"
};

// Initialize Firebase
if (!firebase.apps.length)
{
  firebase.initializeApp(firebaseConfig);
}


const auth = firebase.auth();

export { auth };