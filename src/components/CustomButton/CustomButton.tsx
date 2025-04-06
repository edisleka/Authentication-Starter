import { Text, Pressable } from 'react-native'
import { CustomButtonProps } from '@/components/CustomButton/CustomButton.types'

export default function CustomButton({ text, ...props }: CustomButtonProps) {
  return (
    <Pressable
      {...props}
      className={`bg-[#4353FD] py-3 rounded-md items-center ${props.className}`}
    >
      <Text className='text-white text-base font-semibold'>{text}</Text>
    </Pressable>
  )
}
