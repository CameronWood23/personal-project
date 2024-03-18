import React from "react"
import SignInForm from "../../organisms/signInForm/SignInForm"
import SignUpForm from "../../organisms/signUpForm/SignUpForm"
import { AuthenticationContainer } from "./authenticationScreen.styles"

const AuthenticationScreen: React.FC = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  )
}

export default AuthenticationScreen
