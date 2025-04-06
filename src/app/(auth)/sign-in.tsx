import { View, Text, TextInput, Pressable } from 'react-native'

export default function SignInScreen() {
  return (
    <View className='flex-1 p-5 gap-5 justify-center bg-white'>
      <Text className='text-2xl font-semibold'>Sign in</Text>
      <TextInput
        placeholder='Email'
        className='border border-gray-300 p-2.5 rounded-md'
      />
      <TextInput
        placeholder='Password'
        className='border border-gray-300 p-2.5 rounded-md'
        secureTextEntry={true}
      />
      <Pressable className='bg-[#4353FD] p-4 rounded-md items-center'>
        <Text className='text-white text-base font-semibold'>Sign In</Text>
      </Pressable>
    </View>
  )
}
