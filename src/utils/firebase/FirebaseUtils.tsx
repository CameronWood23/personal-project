import { initializeApp } from "firebase/app"
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  writeBatch,
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBzZgPfO6jUNM5CGt5bHIB0Z3iNkaQEjck",
  authDomain: "bitbasket-ecommerce.firebaseapp.com",
  projectId: "bitbasket-ecommerce",
  storageBucket: "bitbasket-ecommerce.appspot.com",
  messagingSenderId: "923950955859",
  appId: "1:923950955859:web:ec041204e1d12fab3875a6",
}

const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: "select_account",
})

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const db = getFirestore()

export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: any[],
) => {
  const batch = writeBatch(db)
  const collectionRef = collection(db, collectionKey)
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })
  await batch.commit()
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories")
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  const categoryMap = querySnapshot.docs.reduce<{ [key: string]: any }>(
    (acc, docSnapshot) => {
      const { title, items } = docSnapshot.data()
      acc[title.toLowerCase()] = items
      return acc
    },
    {},
  )
  return categoryMap
}

export const createUserDocumentFromAuth = async (
  userAuth: any,
  additionalInformation: any = {},
) => {
  const userDocRef = doc(db, "users", userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (error: any) {
      console.log("error creating the user", error.message)
    }
  }
  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  if (!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  if (!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback: any) =>
  onAuthStateChanged(auth, callback)
