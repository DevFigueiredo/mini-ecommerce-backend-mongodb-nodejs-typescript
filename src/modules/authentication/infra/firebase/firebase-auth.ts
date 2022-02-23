import firebase from 'firebase/app'
import 'firebase/auth'
import 'dotenv/config'

const firebaseAuth = firebase.initializeApp({
  apiKey: process.env.API_WEB_FIREBASE_KEY
})

const auth = firebaseAuth.auth()

export { auth }
