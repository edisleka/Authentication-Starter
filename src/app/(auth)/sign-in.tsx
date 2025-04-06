import { Text, KeyboardAvoidingView, Platform } from 'react-native'
import { CustomInput, CustomButton } from '@/components'
import { useForm } from 'react-hook-form'

export default function SignInScreen() {
  const { control, handleSubmit } = useForm({})

  const onSignIn = (data: any) => {
    console.log('Sign In pressed: ', data)
  }

  return (
    <KeyboardAvoidingView
      className='flex-1 px-5 gap-5 justify-center bg-white'
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text className='text-2xl font-semibold'>Sign in</Text>

      <CustomInput
        control={control}
        name='email'
        placeholder='Email'
        autoFocus={true}
        autoCapitalize='none'
        keyboardType='email-address'
        autoComplete='email'
        autoCorrect={false}
        spellCheck={false}
        textContentType={Platform.OS === 'ios' ? 'password' : undefined}
        importantForAutofill={Platform.OS === 'android' ? 'yes' : undefined}
        returnKeyType='next'
      />

      <CustomInput
        control={control}
        name='password'
        placeholder='Password'
        secureTextEntry={true}
        autoCapitalize='none'
        autoComplete='password'
        autoCorrect={false}
        returnKeyType='done'
        textContentType={Platform.OS === 'ios' ? 'password' : undefined}
        importantForAutofill={Platform.OS === 'android' ? 'yes' : undefined}
      />

      <CustomButton text='Sign In' onPress={handleSubmit(onSignIn)} />
    </KeyboardAvoidingView>
  )
}
