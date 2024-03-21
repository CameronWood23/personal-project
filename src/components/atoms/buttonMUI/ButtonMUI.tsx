import { Button, ButtonProps } from "@mui/material"
import React from "react"

interface ButtonMUIProps {
  variant: ButtonProps["variant"]
  buttonText: string
  onClick?: () => void
}

const ButtonMUI: React.FC<ButtonMUIProps> = ({
  variant,
  buttonText,
  onClick,
}) => {
  return (
    <div>
      <Button variant={variant} onClick={onClick}>
        {buttonText}
      </Button>
    </div>
  )
}

export default ButtonMUI
