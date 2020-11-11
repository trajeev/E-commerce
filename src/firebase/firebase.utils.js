import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyALKMqJKU9KoS30qcOF7Ptbt0lR8EQOA10",
    authDomain: "clothing-db-1b359.firebaseapp.com",
    databaseURL: "https://clothing-db-1b359.firebaseio.com",
    projectId: "clothing-db-1b359",
    storageBucket: "clothing-db-1b359.appspot.com",
    messagingSenderId: "873944291100",
    appId: "1:873944291100:web:1f02e53d54140ec3078cd9",
    measurementId: "G-YGBV804LB8"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

