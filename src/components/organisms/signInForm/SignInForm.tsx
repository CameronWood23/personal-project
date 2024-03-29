import React, { ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../../redux/hooks"
import { fetchCurrentUser } from "../../../redux/slices/userSlice"
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../../utils/firebase/FirebaseUtils"
import { Button } from "../../atoms"
import { FormInput } from "../../molecules"
import {
  ButtonsContainer,
  SignUpContainer,
  TitleText,
} from "./signInForm.styles"

interface FormFields {
  email: string
  password: string
}

const defaultFormFields: FormFields = {
  email: "",
  password: "",
}

const SignInForm: React.FC = () => {
  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields)
  const { email, password } = formFields
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup()
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      await signInAuthUserWithEmailAndPassword(email, password)
      resetFormFields()
      dispatch(fetchCurrentUser())
      navigate("/")
      alert("Sign In Successful!")
    } catch (error: any) {
      switch (error.code) {
        case "auth/invalid-login-credentials":
          alert("Incorrect Username or Password. Please try again.")
          break
        default:
          console.log(error)
      }
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
          <Button>Sign In</Button>
          <Button buttonType={"google"} onClick={signInWithGoogle}>
            Google Sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  )
}

export default SignInForm
