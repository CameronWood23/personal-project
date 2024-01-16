import SignUpForm from "../../organisms/signUpForm/SignUpForm"
import SignInForm from "../../organisms/signInForm/SignInForm"
import "./authentication-screen.styles.scss"

const AuthenticationScreen = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default AuthenticationScreen
