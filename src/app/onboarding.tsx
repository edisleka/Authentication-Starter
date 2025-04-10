import { useAuth } from '@clerk/clerk-expo'
import { Text, View } from 'react-native'
import { Link, Redirect } from 'expo-router'

export default function OnBoardingScreen() {
  const { isSignedIn } = useAuth()

  if (isSignedIn) {
    return <Redirect href='/(protected)/(tabs)' />
  }

  return (
    <View className='flex-1 items-center justify-center bg-white gap-20 font-poppins'>
      <Text className='text-2xl text-secondary font-poppins-semibold'>
        Onboarding Screen
      </Text>

      <Link
        href='/sign-in'
        className='bg-primary px-8 py-4 rounded-full text-light font-bold text-lg shadow-md '
      >
        Get Started
      </Link>
    </View>
  )
}
