import { CustomInputProps } from '@/components/CustomInput/CustomInput.types'
import { Controller } from 'react-hook-form'
import { TextInput } from 'react-native'

export default function CustomInput({
  control,
  name,
  ...props
}: CustomInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur } }) => (
        <TextInput
          {...props}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          className={`border border-gray-300 p-2.5 rounded-md ${props.className}`}
        />
      )}
    />
  )
}
