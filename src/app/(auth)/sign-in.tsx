import { Text, Pressable, KeyboardAvoidingView, Platform } from 'react-native'
import CustomInput from '@/components/CustomInput'

export default function SignInScreen() {
  return (
    <KeyboardAvoidingView
      className='flex-1 px-5 gap-5 justify-center bg-white'
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text className='text-2xl font-semibold'>Sign in</Text>

      <CustomInput
        className='bg-red-500'
        placeholder='Email'
        autoFocus={true}
        autoCapitalize='none' // Prevents auto-capitalization
        keyboardType='email-address' // Helps with form autofill
        autoComplete='email' // Helps with form autofill
        autoCorrect={false} // Prevents autocorrect for emails
        spellCheck={false} // Disables spell check
        textContentType='emailAddress' // iOS autofill hint
      />

      <CustomInput
        placeholder='Password'
        secureTextEntry={true}
        autoCapitalize='none' // Prevents auto-capitalization
        autoComplete='password' // Helps with form autofill
        autoCorrect={false} // Prevents autocorrect for passwords
        returnKeyType='done' // Helps with form autofill
        textContentType='password' // iOS autofill hint
      />

      <Pressable className='bg-[#4353FD] p-4 rounded-md items-center'>
        <Text className='text-white text-base font-semibold'>Sign In</Text>
      </Pressable>
    </KeyboardAvoidingView>
  )
}
