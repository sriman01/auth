"use client"

import { SessionProvider} from 'next-auth/react'

export const AuthProvider = ({ children }) => {
    return <SessionProvider>{ children }</SessionProvider>
}

// export const NextAuthProvider = ({ children }) => {
//     return <SessionProvider>{ children }</SessionProvider>
// }