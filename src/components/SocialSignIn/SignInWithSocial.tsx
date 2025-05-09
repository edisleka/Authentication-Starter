import * as WebBrowser from 'expo-web-browser'
import * as AuthSession from 'expo-auth-session'
import { CustomButton } from '@/components'
import { useCallback, useEffect } from 'react'
import { useSSO } from '@clerk/clerk-expo'
import { SignInWithSocialProps } from './SignInWithSocial.types'
import { capitalizeFirstLetter } from '@/helpers/capitalize'

export const useWarmUpBrowser = () => {
  useEffect(() => {
    // Preloads the browser for Android devices to reduce authentication load time
    void WebBrowser.warmUpAsync()
    return () => {
      // Cleanup: closes browser when component unmounts
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

// Handle any pending authentication sessions
WebBrowser.maybeCompleteAuthSession()

export default function SignInWithSocial({
  provider,
  social,
  className,
  textClassName,
}: SignInWithSocialProps) {
  useWarmUpBrowser()

  // Use the `useSSO()` hook to access the `startSSOFlow()` method
  const { startSSOFlow } = useSSO()

  const onPress = useCallback(async () => {
    try {
      // Start the authentication process by calling `startSSOFlow()`
      const { createdSessionId, setActive, signIn, signUp } =
        await startSSOFlow({
          strategy: provider,
          // For web, defaults to current path
          // For native, you must pass a scheme, like AuthSession.makeRedirectUri({ scheme, path })
          // For more info, see https://docs.expo.dev/versions/latest/sdk/auth-session/#authsessionmakeredirecturioptions
          redirectUrl: AuthSession.makeRedirectUri(),
        })

      // If sign in was successful, set the active session
      if (createdSessionId) {
        setActive!({ session: createdSessionId })
      } else {
        // If there is no `createdSessionId`,
        // there are missing requirements, such as MFA
        // Use the `signIn` or `signUp` returned from `startSSOFlow`
        // to handle next steps
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
    }
  }, [])

  return (
    <CustomButton
      text={`${capitalizeFirstLetter(social)}`}
      onPress={onPress}
      className={className}
      textClassName={textClassName}
    />
  )
}
