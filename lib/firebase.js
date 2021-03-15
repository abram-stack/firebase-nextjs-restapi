import firebase from 'firebase/app'
import 'firebase/auth'
import 'firbase/storage'
import 'firebase/firestore'


const firebaseConfig= {
  apiKey: "AIzaSyCbD4iLewmVpw95nk2P3U-zXSwmUQrZZeQ",
  authDomain: "fire-next-restapi.firebaseapp.com",
  projectId: "fire-next-restapi",
  storageBucket: "fire-next-restapi.appspot.com",
  messagingSenderId: "243425172942",
  appId: "1:243425172942:web:56b3725baa161e152d9f9f",
  measurementId: "G-T7TEKXF9VT"
}


// init app
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// centralize firebase export
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
