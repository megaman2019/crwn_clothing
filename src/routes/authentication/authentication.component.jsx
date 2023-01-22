// import { useEffect } from "react"
// import { getRedirectResult } from "firebase/auth"

import SignUpForm from "../../components/sign-up-form/sign-up-form.component"
import SignInForm from "../../components/sign-in-form/sign-in-form.component"

import "./authentication.styles.scss"

const Authentication = () => {
  // useEffect(() => {
  //   async function fetch() {
  //     const response = await getRedirectResult(auth)
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user)
  //     }
  //   }

  //   fetch()
  // }, [])

  return (
    <div className="authentication-container">
      {/* <button onClick={signinWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication
