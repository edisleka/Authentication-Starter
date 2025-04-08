import { useAuth } from '@/providers/AuthProvider'
import { Redirect, Stack } from 'expo-router'

export default function AuthLayout() {
  const { isAuthenticated } = useAuth() // Custom AuthProvider

  if (isAuthenticated) {
    return <Redirect href='/(protected)/(tabs)' />
  }

  return (
    <Stack>
      {/* <Stack.Screen name='sign-in' options={{ headerShown: false }} />
      <Stack.Screen name='sign-up' options={{ headerShown: false }} /> */}
    </Stack>
  )
}
