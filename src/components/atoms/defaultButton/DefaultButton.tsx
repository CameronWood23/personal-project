import { Button, ButtonProps, SxProps, Theme } from "@mui/material"
import React from "react"

interface DefaultButtonProps {
  variant: ButtonProps["variant"]
  buttonText: string
  size?: "small" | "medium" | "large"
  sx?: SxProps<Theme>
  onClick?: () => void
}

const DefaultButton: React.FC<DefaultButtonProps> = ({
  variant,
  buttonText,
  onClick,
  size,
  sx,
}) => {
  return (
    <div>
      <Button variant={variant} onClick={onClick} size={size} sx={sx}>
        {buttonText}
      </Button>
    </div>
  )
}

export default DefaultButton
