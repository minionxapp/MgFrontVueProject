// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TO DO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCvDkvV2aFmGueuJ9HBXUKEwDp-zed_4J0',
  authDomain: 'portalberita-aa9f0.firebaseapp.com',
  projectId: 'portalberita-aa9f0',
  storageBucket: 'portalberita-aa9f0.appspot.com',
  messagingSenderId: '546103617227',
  appId: '1:546103617227:web:9e0ed651df7980d6931d4e'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }
