import { View, Text, Button } from 'react-native'
import { useAuth } from '@/providers/AuthProvider' // Custom AuthProvider

export default function ProfileScreen() {
  const { signOut } = useAuth() // Custom AuthProvider

  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button title='Sign Out' onPress={signOut} />
    </View>
  )
}
