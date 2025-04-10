import { Text, KeyboardAvoidingView, Platform, View } from 'react-native'
import { CustomInput, CustomButton } from '@/components'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  SignInFields,
  signinSchema,
} from '@/zodSchemas/auth/sign-in.zod.schemas'
import HaveAccount from '@/components/Auth/HaveAccount'
import { useSignIn } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'

export default function SignInScreen() {
  const router = useRouter()

  const { control, handleSubmit } = useForm<SignInFields>({
    resolver: zodResolver(signinSchema),
  })

  const { signIn, isLoaded, setActive } = useSignIn()

  const onSignIn = async (data: SignInFields) => {
    if (!isLoaded) return

    try {
      const signInAttempt = await signIn.create({
        identifier: data.email,
        password: data.password,
      })

      if (signInAttempt.status === 'complete') {
        console.log('Sign in successful -- by Edis')
        setActive({ session: signInAttempt.createdSessionId })
        router.replace('/(protected)/(tabs)')
      } else {
        console.log('Sign in failed -- by Edis')
      }

      console.log(
        'Sign in attempt -- by Edis: ',
        JSON.stringify(signInAttempt, null, 2)
      )
    } catch (error) {
      console.log('Error signing in -- by Edis: ', error)
    }

    console.log('Sign In pressed -- by Edis: ', data.email, data.password)
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
      </View>

      <CustomButton text='Sign in' onPress={handleSubmit(onSignIn)} />

      <HaveAccount
        sign='Sign up'
        sentence="Don't have an account?"
        link={'/sign-up'}
      />
    </KeyboardAvoidingView>
  )
}
