import { View, Text, Button } from 'react-native'
import { useAuth } from '@clerk/clerk-expo'

export default function ProfileScreen() {
  const { signOut } = useAuth()

  return (
    <View className='flex-1 items-center justify-center'>
      <Text>ProfileScreen</Text>
      <Button title='Sign Out' onPress={() => signOut()} />
    </View>
  )
}
