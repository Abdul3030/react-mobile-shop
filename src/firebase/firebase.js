import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';





const firebaseConfig = {
    apiKey: "AIzaSyAsyPGOoMuXtsgfvvtF7IW-I-Zw3p8xO6Y",
    authDomain: "oauth-jahid.firebaseapp.com",
    databaseURL: "https://oauth-jahid.firebaseio.com",
    projectId: "oauth-jahid",
    storageBucket: "oauth-jahid.appspot.com",
    messagingSenderId: "618979234006",
    appId: "1:618979234006:web:49f1c37f7b1bc722093977",
    measurementId: "G-2NM0CEG1BH"
  };


  
export const createUserProfileDocument = async  (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    try{
      const {displayName, email} = userAuth;
      userRef.set({
        name: displayName,
        email: email
      })
    }catch(error){
      console.log(error)
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);
  

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
    'propmt': 'select a user'
  });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;