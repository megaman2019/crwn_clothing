import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth"

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBfJ6_qNk-lAaax-yecDtOKvvhr2jzCFwY",
  authDomain: "crwn-clothing-db-6fbb7.firebaseapp.com",
  projectId: "crwn-clothing-db-6fbb7",
  storageBucket: "crwn-clothing-db-6fbb7.appspot.com",
  messagingSenderId: "431760961828",
  appId: "1:431760961828:web:10316ece65253fdcc4c3b1",
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: "select_account",
})

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid)
  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, { displayName, email, createdAt })
    } catch (error) {
      console.log("error creating the user", error.message)
    }
  }

  return userDocRef
}
