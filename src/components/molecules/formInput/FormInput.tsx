import React from "react"
import { FormInputLabel, Group, Input } from "./formInput.styles"

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  value,
  ...otherProps
}) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && <FormInputLabel shrink={!!value}>{label}</FormInputLabel>}
    </Group>
  )
}

export default FormInput
