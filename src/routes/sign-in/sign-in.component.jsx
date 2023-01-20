// import { useEffect } from "react"
// import { getRedirectResult } from "firebase/auth"

import {
  // auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  // signinWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils"

import SignUpForm from "../../components/sign-up-form/sign-up-form.component"

const SignIn = () => {
  // useEffect(() => {
  //   async function fetch() {
  //     const response = await getRedirectResult(auth)
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user)
  //     }
  //   }

  //   fetch()
  // }, [])

  const logGooglePopupUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGooglePopupUser}>Sign in with Google Popup</button>
      {/* <button onClick={signinWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
      <SignUpForm />
    </div>
  )
}

export default SignIn
