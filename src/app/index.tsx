import { Text, View } from 'react-native'
import { Link } from 'expo-router'

export default function OnBoardingScreen() {
  return (
    <View className='flex-1 items-center justify-center bg-white gap-20'>
      <Text className='text-2xl font-bold'>Onboarding Screen</Text>

      <Link
        href='/sign-in'
        className='bg-blue-500 px-8 py-4 rounded-full text-white font-bold text-lg shadow-md'
      >
        Get Started
      </Link>
    </View>
  )
}
