import { initializeApp } from "firebase/app";
import {
    getAuth,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword
  } from "firebase/auth";
const firebaseConfig={
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
   
}
const firebaseApp=initializeApp(firebaseConfig);

const auth=getAuth(firebaseApp);


export const logInWithEmailAndPassword = async (
    email: string,
    password: string,
    name: string
  ): Promise< any | null> => {
    try {
        console.log(email,password)
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res)
      const userData = {
        uid: res.user.uid,
        name,
        email: res.user.email,
      };
      return userData;
    } catch (err) {
      if (err instanceof Error) {
        // Handle authentication-specific errors gracefully
        console.error(err.message);
      } else {
        console.error("Unexpected error", err);
      }
      return null; // Return null in case of error
    }
  };

  export const doSignInwithGoogle=async ()=>{
    const provider=new GoogleAuthProvider();
    const result=await signInWithPopup(auth,provider);
    return result;
  }

  export const logoutFirebase = () => {
    signOut(auth);
  };