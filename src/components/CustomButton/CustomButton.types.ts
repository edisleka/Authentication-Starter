import { PressableProps } from 'react-native'

export interface CustomButtonProps extends PressableProps {
  // Custom fields ...
  text: string
  textClassName?: string
}
