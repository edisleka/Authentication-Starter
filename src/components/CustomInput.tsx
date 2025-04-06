import { TextInput, TextInputProps } from 'react-native'

interface CustomInputProps extends TextInputProps {
  // Custom fields ...
}

export default function CustomInput(props: CustomInputProps) {
  return (
    <TextInput
      {...props}
      className={`border border-gray-300 p-2.5 rounded-md ${props.className}`}
    />
  )
}
