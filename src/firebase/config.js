// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import product from '../mocks/products.json'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN5kZcqN--jqKPL8qHlIOdzVmZirgalEw",
  authDomain: "ecommerce1-react.firebaseapp.com",
  projectId: "ecommerce1-react",
  storageBucket: "ecommerce1-react.appspot.com",
  messagingSenderId: "530765933480",
  appId: "1:530765933480:web:cba1a8b2c4662300584b9d",
  measurementId: "G-NHTH4Y5W26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(getApps)

 /*product.forEach((product) => {
   addDoc(collection(db, 'products'), product).then((
    docRef => {
        console.log('doc agregado', docRef.id);
    }))
    .catch((error) => { 
    console.error("error", error)
 })
}) */
