import { CustomInputProps } from '@/components/CustomInput/CustomInput.types'
import { Controller, FieldValues } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'

export default function CustomInput<T extends FieldValues>({
  control,
  name,
  ...props
}: CustomInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View className='gap-1'>
          <TextInput
            {...props}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            className={`border border-gray-300 p-2.5 rounded-md ${
              props.className
            } ${error ? 'border-red-500' : 'border-gray-300'}`}
          />
          <Text className='text-red-500 text-xs'>{error?.message}</Text>
        </View>
      )}
    />
  )
}
