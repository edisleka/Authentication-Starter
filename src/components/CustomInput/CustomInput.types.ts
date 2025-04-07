import { Control, FieldValues, Path } from 'react-hook-form'
import { TextInputProps } from 'react-native'

export interface CustomInputProps<T extends FieldValues>
  extends TextInputProps {
  // Custom props ...
  control: Control<T>
  name: Path<T>
}
