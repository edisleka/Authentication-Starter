import { Text, KeyboardAvoidingView, Platform, View } from 'react-native'
import { CustomInput, CustomButton } from '@/components'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const signinSchema = z.object({
  email: z
    .string({
      required_error:
        'Email is required -- Custom Message - .string() - signin.tsx',
    })
    .email({
      message: 'Invalid email -- Custom Message - .email() - signin.tsx',
    }),
  password: z
    .string({
      required_error:
        'Password is required -- Custom Message - .string() - signin.tsx',
    })
    .min(8, {
      message:
        'Password must be at least 8 characters -- Custom Message - .min() - signin.tsx',
    }),
})

type SignInFields = z.infer<typeof signinSchema>

export default function SignInScreen() {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(signinSchema),
  })

  const onSignIn = (data: SignInFields) => {
    // Validate the form

    console.log('Sign In pressed: ', data.email, data.password)
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

      <CustomButton text='Sign In' onPress={handleSubmit(onSignIn)} />
    </KeyboardAvoidingView>
  )
}
