// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJbjL0VVyWEq0vuv0PDbpUAebtQigYS7M",
  authDomain: "coffee-disease-detect.firebaseapp.com",
  projectId: "coffee-disease-detect",
  storageBucket: "coffee-disease-detect.appspot.com",
  messagingSenderId: "963054549726",
  appId: "1:963054549726:web:4facade67e4679917a604f",
  measurementId: "G-JQBG48G3TW"
};

// Initialize Firebase
let app;
if(firebase.apps.length===0){
    app=initializeApp(firebaseConfig);
}
else{
    app=firebase.app()
}

const auth = firebase.auth()
export{auth};
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);