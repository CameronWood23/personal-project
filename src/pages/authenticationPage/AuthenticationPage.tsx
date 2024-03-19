import React from "react"
import SignInForm from "../../components/organisms/signInForm/SignInForm"
import SignUpForm from "../../components/organisms/signUpForm/SignUpForm"
import { AuthenticationContainer } from "./authenticationPage.styles"

const AuthenticationPage: React.FC = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  )
}

export default AuthenticationPage
