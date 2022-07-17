// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

// Your web app's Firebase configuraion
const firebaseConfig = {
  apiKey: "AIzaSyCFCljyXBLmceAxWEFMWO4ivIbEMTC5AJ4",
  authDomain: "feelapplicationmobile.firebaseapp.com",
  projectId: "feelapplicationmobile",
  storageBucket: "feelapplicationmobile.appspot.com",
  messagingSenderId: "868891317408",
  appId: "1:868891317408:web:ec5e8837111e8064b7a5c5",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
