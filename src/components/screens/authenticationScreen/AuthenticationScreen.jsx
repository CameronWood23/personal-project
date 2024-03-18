import SignUpForm from "../../organisms/signUpForm/SignUpForm"
import SignInForm from "../../organisms/signInForm/SignInForm"
import { AuthenticationContainer } from "./authenticationScreen.styles.jsx"

const AuthenticationScreen = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  )
}

export default AuthenticationScreen
