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
    // This function remains unchanged
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

  // MODIFIED FUNCTION FOR TESTING
  const signInWithGoogle = async () => {
    const signInOptions = {
      provider: 'google'
    };
  
    // Forcing a specific redirect to see if it works
    // This line is now UNCOMMENTED for the test
    signInOptions.options = { redirectTo: 'http://localhost:5173/auth/callback' };
  
    const { data, error } = await supabase.auth.signInWithOAuth(signInOptions);
  
    if (error) {
      console.error('Supabase OAuth Error:', error);
    }
  
    return { data, error };
  }

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  // Utility function remains unchanged
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