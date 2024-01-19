// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwVhOhJnhaafTB0NChMgP1Octzy0fvZOs",
  authDomain: "doc-app-bf587.firebaseapp.com",
  projectId: "doc-app-bf587",
  storageBucket: "doc-app-bf587.appspot.com",
  messagingSenderId: "69845690512",
  appId: "1:69845690512:web:d9e47fb616882ce5cb1015"
};

// Initialize Firebase
export const Firebase = initializeApp(firebaseConfig);
export const Firestore=getFirestore(Firebase);