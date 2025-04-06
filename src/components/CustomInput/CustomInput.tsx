import { TextInput } from 'react-native'
import { CustomInputProps } from '@/components/CustomInput/CustomInput.types'

export default function CustomInput(props: CustomInputProps) {
  return (
    <TextInput
      {...props}
      className={`border border-gray-300 p-2.5 rounded-md ${props.className}`}
    />
  )
}
