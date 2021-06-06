import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBjw2jx7pFs_SAIDJiE99HUV2xdWEMYZZ8",
    authDomain: "e-commerece-7742a.firebaseapp.com",
    projectId: "e-commerece-7742a",
    storageBucket: "e-commerece-7742a.appspot.com",
    messagingSenderId: "132713015569",
    appId: "1:132713015569:web:3cb9cd542b8dd3833704b0"
  };

  export const userProfileData = async (userAuth,aditionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`)

    const snapshot = await userRef.get()

    if(!snapshot.exists){
      const {displayName,email} = userAuth
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...aditionalData
        })
      }catch(err){
        console.log(`error creating user ${err.message}`)

      }
    }
    return userRef
  }

  firebase.initializeApp(config);

 

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  export const signInWithGoolge = () => auth.signInWithPopup(provider);

  export default firebase;