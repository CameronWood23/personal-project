import React, { ChangeEvent, FormEvent, useState } from "react"
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/FirebaseUtils"
import Button from "../../atoms/button/Button"
import FormInput from "../../molecules/formInput/FormInput"
import { SignUpContainer, TitleText } from "./signUpForm.styles"

interface FormFields {
  displayName: string
  email: string
  password: string
  confirmPassword: string
}

const defaultFormFields: FormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const SignUpForm: React.FC = () => {
  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords do not match")
      return
    }
    try {
      const userCredential = await createAuthUserWithEmailAndPassword(
        email,
        password,
      )
      if (userCredential && userCredential.user) {
        const { user } = userCredential
        await createUserDocumentFromAuth(user, { displayName })
        resetFormFields()
      }
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email is already in use.")
      }
      console.log(error)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <SignUpContainer>
      <TitleText>Don't have an Account?</TitleText>
      <span>Sign Up with your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button>Sign Up</Button>
      </form>
    </SignUpContainer>
  )
}

export default SignUpForm
