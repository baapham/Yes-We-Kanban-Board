import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_YWK_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_YWK_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_YWK_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_YWK_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_YWK_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:
    process.env.REACT_APP_YWK_FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
