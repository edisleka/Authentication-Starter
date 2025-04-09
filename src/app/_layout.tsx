import { Stack } from 'expo-router'
import { ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import '@/global.css'

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <Stack>
        {/* <Stack.Screen name='onboarding' options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name='(auth)' options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name='(protected)' options={{ headerShown: false }} /> */}
      </Stack>
    </ClerkProvider>
  )
}
