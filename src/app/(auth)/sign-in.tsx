import { Text, KeyboardAvoidingView, Platform, View, Alert } from 'react-native'
import { CustomInput, CustomButton } from '@/components'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  SignInFields,
  signinSchema,
} from '@/zodSchemas/auth/sign-in.zod.schemas'
import HaveAccount from '@/components/Auth/HaveAccount'
import { isClerkAPIResponseError, useSignIn } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'
import SignInWithSocial from '@/components/SocialSignIn/SignInWithSocial'
const mapClerkErrorToFormField = (error: any) => {
  switch (error.meta?.paramName) {
    case 'identifier':
      return 'email'
    case 'password':
      return 'password'
    default:
      return 'root'
  }
}

export default function SignInScreen() {
  const router = useRouter()

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignInFields>({
    resolver: zodResolver(signinSchema),
  })

  // console.log('Errors -- by Edis: ', JSON.stringify(errors, null, 2))

  const { signIn, isLoaded, setActive } = useSignIn()

  const onSignIn = async (data: SignInFields) => {
    if (!isLoaded) return

    try {
      const signInAttempt = await signIn.create({
        identifier: data.email,
        password: data.password,
      })

      if (signInAttempt.status === 'complete') {
        // console.log('Sign in successful -- by Edis')
        setActive({ session: signInAttempt.createdSessionId })
        router.replace('/(protected)/(tabs)')
      } else {
        // console.log('Sign in failed -- by Edis')
        setError('root', {
          message: 'Sign in could not be completed',
        })
      }
    } catch (err) {
      // console.log('Error signing in -- by Edis: ', JSON.stringify(err, null, 2))

      if (isClerkAPIResponseError(err)) {
        err.errors.forEach((error) => {
          const fieldName = mapClerkErrorToFormField(error)
          setError(fieldName, {
            message: error.longMessage,
          })
        })
      } else {
        setError('root', {
          message: 'Unknown error',
        })
      }
    }

    // console.log('Sign In pressed -- by Edis: ', data.email, data.password)
  }

  return (
    <KeyboardAvoidingView
      className='flex-1 px-5 gap-5 justify-center bg-white'
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text className='text-2xl font-semibold mb-2'>Sign in</Text>

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

        {errors.root && (
          <Text className='text-red-500 text-xs'>{errors.root.message}</Text>
        )}
      </View>

      <CustomButton text='Sign in' onPress={handleSubmit(onSignIn)} />

      <HaveAccount
        sign='Sign up'
        sentence="Don't have an account?"
        link={'/sign-up'}
      />

      <View className='flex flex-row items-center my-2'>
        <View className='flex-1 h-px bg-gray-300' />
        <Text className='mx-4 text-gray-500 font-medium'>or continue with</Text>
        <View className='flex-1 h-px bg-gray-300' />
      </View>

      <SignInWithSocial
        provider='oauth_google'
        social='google'
        className='bg-white border border-black'
        textClassName='text-black'
      />
      <SignInWithSocial provider='oauth_apple' social='apple' />
    </KeyboardAvoidingView>
  )
}
