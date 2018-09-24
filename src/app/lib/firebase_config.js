import firebase from 'firebase';
//import 'firebase/firebase-auth';
//import 'firebase/firebase-database';

  // Initialize Firebase

/*
  try {
    
    
  } catch(e) {
    if(!/already exists/.test(e.message)){
      console.log(`Firebase didn't initialize properly:${e.message}`)
    }
  }
  
  const config = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    databaseURL: FIREBASE_DATABASE_URL,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);
*/
  var config = {
    apiKey: "AIzaSyDZHsdI5A5x_f75m4MgYZCO7WRft03IkNw",
    authDomain: "diary-e8b5f.firebaseapp.com",
    databaseURL: "https://diary-e8b5f.firebaseio.com",
    projectId: "diary-e8b5f",
    storageBucket: "diary-e8b5f.appspot.com",
    messagingSenderId: "321003594246"
};
  if(!firebase.apps.length) firebase.initializeApp(config);
  

export const database = firebase.database().ref('/users_packs');
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
  
  
