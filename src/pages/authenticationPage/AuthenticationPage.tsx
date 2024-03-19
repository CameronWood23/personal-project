import React from "react"
import { SignInForm, SignUpForm } from "../../components/organisms"
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
