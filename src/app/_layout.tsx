import { SplashScreen, Stack } from 'expo-router'
import { ClerkProvider, useAuth } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import { ActivityIndicator, LogBox, View } from 'react-native'
import '@/global.css'

// Prevent the splash screen from automatically hiding before the assets loading is complete
SplashScreen.preventAutoHideAsync()

const InitialLayout = () => {
  const [fontsLoaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
    'Poppins-ExtraLight': require('../assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
  })

  const { isLoaded, isSignedIn } = useAuth()

  useEffect(() => {
    if (fontsLoaded && isLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, isLoaded])

  if (!fontsLoaded || !isLoaded) {
    return (
      <View className='flex-1 items-center justify-center bg-white'>
        <ActivityIndicator size='large' color='var(--primary)' />
      </View>
    )
  }

  // Suppress specific warnings from Clerk
  LogBox.ignoreLogs(['Clerk: Clerk has been loaded with development keys'])

  return (
    <Stack>
      <Stack.Screen name='onboarding' options={{ headerShown: false }} />
      <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      <Stack.Screen name='(protected)' options={{ headerShown: false }} />
    </Stack>
  )
}

const RootLayoutNav = () => {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <InitialLayout />
    </ClerkProvider>
  )
}
export default RootLayoutNav
