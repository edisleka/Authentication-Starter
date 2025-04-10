import { Text, KeyboardAvoidingView, Platform, View } from 'react-native'
import { CustomInput, CustomButton } from '@/components'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { isClerkAPIResponseError, useSignUp } from '@clerk/clerk-expo'
import {
  VerifyFields,
  verifySchema,
} from '@/zodSchemas/auth/verify.zod.schemas'
import { useRouter } from 'expo-router'

const mapClerkErrorToFormField = (error: any) => {
  switch (error.meta?.paramName) {
    case 'code':
      return 'code'
    default:
      return 'root'
  }
}

export default function VerifyScreen() {
  const router = useRouter()

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<VerifyFields>({
    resolver: zodResolver(verifySchema),
  })

  const { signUp, isLoaded, setActive } = useSignUp()

  const onVerify = async ({ code }: VerifyFields) => {
    if (!isLoaded) return

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      })

      if (signUpAttempt.status === 'complete') {
        await setActive({ session: signUpAttempt.createdSessionId })
        router.replace('/(protected)/(tabs)')
      } else {
        // console.log('Verification failed -- by Edis')
        // console.log(
        //   'Verification attempt -- by Edis: ',
        //   JSON.stringify(signUpAttempt, null, 2)
        // )
        setError('root', {
          message: 'Verification failed',
        })
      }
    } catch (err) {
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
  }

  return (
    <KeyboardAvoidingView
      className='flex-1 px-5 gap-5 justify-center bg-white'
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text className='text-2xl font-semibold mb-2'>Verify your email</Text>
      <Text className='text-sm text-gray-500 mb-2'>
        We have sent a code to your email.
      </Text>

      <CustomInput
        control={control}
        name='code'
        placeholder='123456'
        autoFocus={true}
        autoCapitalize='none'
        keyboardType='number-pad'
        autoComplete='one-time-code'
        autoCorrect={false}
        spellCheck={false}
        importantForAutofill={Platform.OS === 'android' ? 'yes' : undefined}
        textContentType={Platform.OS === 'ios' ? 'oneTimeCode' : undefined}
        returnKeyType='next'
      />

      <CustomButton text='Verify' onPress={handleSubmit(onVerify)} />
    </KeyboardAvoidingView>
  )
}
