import { Text, KeyboardAvoidingView, Platform, View } from 'react-native'
import { CustomInput, CustomButton } from '@/components'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import HaveAccount from '@/components/Auth/HaveAccount'
import {
  SignUpFields,
  signupSchema,
} from '@/zodSchemas/auth/sign-up.zod.schemas'

export default function SignUpScreen() {
  const { control, handleSubmit } = useForm<SignUpFields>({
    resolver: zodResolver(signupSchema),
  })

  const onSignUp = (data: SignUpFields) => {
    // Validate the form

    console.log('Sign Up pressed: ', data.email, data.password)
  }

  return (
    <KeyboardAvoidingView
      className='flex-1 px-5 gap-5 justify-center bg-white'
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text className='text-2xl font-semibold mb-2'>Create an account</Text>

      <View className='gap-4'>
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
      </View>

      <CustomButton text='Sign Up' onPress={handleSubmit(onSignUp)} />

      <HaveAccount
        sign='Sign in'
        sentence='Already have an account?'
        link={'/sign-in'}
      />
    </KeyboardAvoidingView>
  )
}
