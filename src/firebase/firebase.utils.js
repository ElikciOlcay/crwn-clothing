import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC1Axn060nTkR6j4nni_QV1DGxeHiDixu8",
    authDomain: "crwn-db-ff855.firebaseapp.com",
    databaseURL: "https://crwn-db-ff855.firebaseio.com",
    projectId: "crwn-db-ff855",
    storageBucket: "crwn-db-ff855.appspot.com",
    messagingSenderId: "469689411558",
    appId: "1:469689411558:web:ead9e7a55e5f82966d1827",
    measurementId: "G-LD4KPR71TC"
  };


  /* 
     create a user in the users collection if not exist-
     call this method in Apo.js when user is authenticated
  */
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user' + error.message);
      }
    }

    return userRef;

  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;