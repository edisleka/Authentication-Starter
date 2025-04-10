import { useAuth } from '@clerk/clerk-expo'
import { Redirect, Stack } from 'expo-router'

export default function AuthLayout() {
  const { isSignedIn } = useAuth()

  if (isSignedIn) {
    return <Redirect href='/(protected)/(tabs)' />
  }

  return (
    <Stack>
      <Stack.Screen name='sign-in' options={{ headerShown: false }} />
      <Stack.Screen name='sign-up' options={{ headerShown: false }} />
      <Stack.Screen name='verify' options={{ headerShown: false }} />
    </Stack>
  )
}
