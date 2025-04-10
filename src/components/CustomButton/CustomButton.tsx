import { Text, Pressable } from 'react-native'
import { CustomButtonProps } from '@/components/CustomButton/CustomButton.types'

export default function CustomButton({
  text,
  className,
  textClassName,
  ...props
}: CustomButtonProps) {
  return (
    <Pressable
      {...props}
      className={`bg-black py-3 rounded-md items-center ${className}`}
    >
      <Text className={`text-base font-poppins-semibold ${textClassName}`}>
        {text}
      </Text>
    </Pressable>
  )
}
