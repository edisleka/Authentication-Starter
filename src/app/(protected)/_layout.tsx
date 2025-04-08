import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@/providers/AuthProvider' // Custom AuthProvider

export default function ProtectedLayout() {
  const { isAuthenticated } = useAuth() // Custom AuthProvider

  if (!isAuthenticated) {
    return <Redirect href='/onboarding' />
  }

  return (
    <Stack>
      {/* <Stack.Screen name='index' options={{ headerShown: false }} /> */}
    </Stack>
  )
}
