import React from "react"
import { BaseButton, GoogleSignInButton, InvertedButton } from "./button.styles"

type ButtonType = "base" | "inverted" | "google"

export const BUTTON_TYPE_CLASSES: Record<ButtonType, string> = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
}

const getButton = (buttonType: ButtonType = "base"): React.ComponentType<any> =>
  ({
    base: BaseButton,
    google: GoogleSignInButton,
    inverted: InvertedButton,
  }[buttonType])

interface ButtonProps {
  children: React.ReactNode
  buttonType?: ButtonType
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  children,
  buttonType = "base",
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType)
  return <CustomButton {...otherProps}>{children}</CustomButton>
}

export default Button
