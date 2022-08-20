import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCqVNlqFfJWjZc500lql7PAAcVDZAm-omE",
    authDomain: "foodie-6c771.firebaseapp.com",
    projectId: "foodie-6c771",
    storageBucket: "foodie-6c771.appspot.com",
    messagingSenderId: "704021385736",
    appId: "1:704021385736:web:785294dcca5e8ac887b7bd"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;