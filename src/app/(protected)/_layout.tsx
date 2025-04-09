import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'

export default function ProtectedLayout() {
  const { isSignedIn } = useAuth()

  if (!isSignedIn) {
    return <Redirect href='/onboarding' />
  }

  return (
    <Stack>
      {/* <Stack.Screen name='index' options={{ headerShown: false }} /> */}
    </Stack>
  )
}
