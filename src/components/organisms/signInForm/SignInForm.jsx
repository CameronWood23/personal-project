import { useState } from "react"
import { useNavigate } from "react-router-dom"
import FormInput from "../../molecules/formInput/FormInput"
import Button, { BUTTON_TYPE_CLASSES } from "../../atoms/button/Button"

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../../utils/firebase/FirebaseUtils"

import {
  ButtonsContainer,
  SignUpContainer,
  TitleText,
} from "./signInForm.styles"

const defaultFormFields = {
  email: "",
  password: "",
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const navigate = useNavigate()

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await signInAuthUserWithEmailAndPassword(email, password)
      resetFormFields()
      navigate("/")
      alert("Sign In Successful!")
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-login-credentials":
          alert("Incorrect Username or Password. Please try again.")
          break
        default:
          console.log(error)
      }
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <SignUpContainer>
      <TitleText>Already have an Account?</TitleText>
      <span>Sign in with your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  )
}

export default SignInForm
