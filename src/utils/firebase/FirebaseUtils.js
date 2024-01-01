import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzZgPfO6jUNM5CGt5bHIB0Z3iNkaQEjck",
  authDomain: "bitbasket-ecommerce.firebaseapp.com",
  projectId: "bitbasket-ecommerce",
  storageBucket: "bitbasket-ecommerce.appspot.com",
  messagingSenderId: "923950955859",
  appId: "1:923950955859:web:ec041204e1d12fab3875a6",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
};
