


// import React, { createContext, useContext, useEffect, useState } from 'react'
// import { supabase } from '../lib/supabase'

// const AuthContext = createContext()

// export const useAuth = () => {
//   const context = useContext(AuthContext)
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider')
//   }
//   return context
// }

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null)
//   const [session, setSession] = useState(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const getSession = async () => {
//       const {
//         data: { session }
//       } = await supabase.auth.getSession()
//       setSession(session)
//       setUser(session?.user ?? null)
//       setLoading(false)
//     }

//     getSession()

//     const {
//       data: { subscription }
//     } = supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session)
//       setUser(session?.user ?? null)
//       setLoading(false)
//     })

//     return () => subscription.unsubscribe()
//   }, [])

//   const signUp = async (email, password, fullName) => {
//     const { data, error } = await supabase.auth.signUp({
//       email,
//       password,
//       options: {
//         emailRedirectTo: `${window.location.origin}/profile-setup`,
//         data: {
//           full_name: fullName
//         }
//       }
//     })
//     return { data, error }
//   }

//   const signIn = async (email, password) => {
//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password
//     })
//     return { data, error }
//   }

//   // New: Google Sign-In using Supabase OAuth
//   const signInWithGoogle = async () => {
//     const { data, error } = await supabase.auth.signInWithOAuth({
//       provider: 'google',
//       options: {
//         redirectTo: `${window.location.origin}/profile-setup`
//       }
//     })
//     return { data, error }
//   }

//   const signOut = async () => {
//     await supabase.auth.signOut()
//   }

//   const value = {
//     user,
//     session,
//     loading,
//     signUp,
//     signIn,
//     signOut,
//     signInWithGoogle, // expose Google sign-in
//   }

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
// }


import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    }

    getSession()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const signUp = async (email, password, fullName) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: getRedirectURL('/profile-setup'),
        data: {
          full_name: fullName
        }
      }
    })
    return { data, error }
  }

  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    return { data, error }
  }

  const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: getRedirectURL('/profile-setup')
      }
    })
    return { data, error }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  // 🔧 Utility to return correct redirect base
  const getRedirectURL = (path = '/') => {
    const origin = typeof window !== 'undefined'
      ? window.location.origin
      : 'https://notespedia-3.vercel.app' // fallback for SSR
    return `${origin}${path}`
  }

  const value = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut,
    signInWithGoogle
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
