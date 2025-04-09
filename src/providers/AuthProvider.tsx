// This is the AuthProvider file ONLY for the custom authentication provider
// This is not used in the project
// import {
//   createContext,
//   PropsWithChildren,
//   useContext,
//   useEffect,
//   useState,
// } from 'react'
// import { View, ActivityIndicator } from 'react-native'
// const AuthContext = createContext({
//   isAuthenticated: false,
//   signIn: () => {},
//   signOut: () => {},
// })

// export const AuthProvider = ({ children }: PropsWithChildren) => {
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(
//     undefined
//   )

//   useEffect(() => {
//     const checkAuth = async () => {
//       await new Promise((resolve) => setTimeout(resolve, 2000))
//       setIsAuthenticated(true)
//     }
//     checkAuth()
//   }, [])

//   const signIn = () => {
//     setIsAuthenticated(true)
//   }

//   const signOut = () => {
//     setIsAuthenticated(false)
//   }

//   if (isAuthenticated === undefined) {
//     return (
//       <View className='flex-1 items-center justify-center'>
//         <ActivityIndicator size='large' color='#0000ff' />
//       </View>
//     )
//   }

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export const useAuth = () => useContext(AuthContext)
