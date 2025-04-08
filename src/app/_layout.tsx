import { Stack } from 'expo-router'
import { AuthProvider } from '@/providers/AuthProvider'
import '@/global.css'

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        {/* <Stack.Screen name='onboarding' options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name='(auth)' options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name='(protected)' options={{ headerShown: false }} /> */}
      </Stack>
    </AuthProvider>
  )
}
