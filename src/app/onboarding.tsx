import { Text, View, Button } from 'react-native'
import { Link } from 'expo-router'
import { useAuth } from '@/providers/AuthProvider' // Custom AuthProvider

export default function OnBoardingScreen() {
  const { isAuthenticated, signOut } = useAuth() // Custom AuthProvider

  return (
    <View className='flex-1 items-center justify-center bg-white gap-20'>
      <Text className='text-2xl font-bold'>Onboarding Screen</Text>

      <Link
        href='/sign-in'
        className='bg-blue-500 px-8 py-4 rounded-full text-white font-bold text-lg shadow-md'
      >
        Get Started
      </Link>

      <Button title='Sign Out' onPress={signOut} />
      <Text>{isAuthenticated ? 'Authenticated' : 'Not Authenticated'}</Text>
    </View>
  )
}
