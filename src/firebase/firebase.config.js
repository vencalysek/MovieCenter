import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCE47CPEW3jla2J_FFeE3SAQz2sbU4bdRM",
    authDomain: "vly-movie-center.firebaseapp.com",
    projectId: "vly-movie-center",
    storageBucket: "vly-movie-center.appspot.com",
    messagingSenderId: "825774802409",
    appId: "1:825774802409:web:374131e324087424197778"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const createUserProfileDoc = async (userAuth) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapShot = await userRef.get();
  
  if (!userSnapShot.exists) {
    const {displayName, email, uid, photoURL} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        uid,
        email,
        createdAt,
        photoURL,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  } 
    return userRef;
  

}




export const signInWithGoogle = () => auth.signInWithPopup(provider)