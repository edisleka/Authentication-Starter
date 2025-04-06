import { TextInputProps } from 'react-native'

export interface CustomInputProps extends TextInputProps {
  // Custom props ...
  control: any
  name: string
}
