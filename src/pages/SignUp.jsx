// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react'
// import { useAuth } from '../contexts/AuthContext'


// const [emailSent, setEmailSent] = useState(false)

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   })
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState('')

//   const { signUp } = useAuth()
//   const navigate = useNavigate()

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setLoading(true)
//     setError('')

//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match')
//       setLoading(false)
//       return
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters long')
//       setLoading(false)
//       return
//     }

//     const { error } = await signUp(formData.email, formData.password, formData.fullName)

//     if (error) {
//       setError(error.message)
//     } else {
//       navigate('/profile-setup')
//     }
  
// if (error) {
//   setError(error.message)
// } else {
//   setEmailSent(true)
// }

//     setLoading(false)
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors">
//       <div className="max-w-md w-full space-y-8">
//         <div className="text-center">
//           <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
//             Join Notespedia
//           </h2>
//           <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
//             Create your account and start your learning journey
//           </p>
//         </div>

//         <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 transition-colors">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             {error && (
//               <div className="bg-red-50 border border-red-200 text-red-600 dark:bg-red-900/70 dark:border-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm transition-colors">
//                 {error}
//               </div>
//             )}

//             {/* Full Name */}
//             <div>
//               <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 Full Name
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <User className="h-5 w-5 text-gray-400 dark:text-gray-500" />
//                 </div>
//                 <input
//                   id="fullName"
//                   name="fullName"
//                   type="text"
//                   required
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-black dark:text-white bg-white dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
//                   placeholder="Enter your full name"
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Mail className="h-5 w-5 text-gray-400 dark:text-gray-500" />
//                 </div>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-black dark:text-white bg-white dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
//                   placeholder="Enter your email"
//                 />
//               </div>
//             </div>

//             {/* Password */}
//             <div>
//   <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//     Password
//   </label>
//   <div className="relative">
//     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//       <Lock className="h-5 w-5 text-gray-400 dark:text-gray-500" />
//     </div>
//     <input
//       id="password"
//       name="password"
//       type={showPassword ? 'text' : 'password'}
//       required
//       value={formData.password}
//       onChange={handleChange}
//       className="block w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-black dark:text-white bg-white dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
//       placeholder="Create a password"
//     />
//     <button
//       type="button"
//       className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 dark:text-gray-500"
//       onClick={() => setShowPassword(!showPassword)}
//     >
//       {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
//     </button>
//   </div>
// </div>
 

//             {/* Confirm Password */}
//           <div>
//   <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//     Confirm Password
//   </label>
//   <div className="relative">
//     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//       <Lock className="h-5 w-5 text-gray-400 dark:text-gray-500" />
//     </div>
//     <input
//       id="confirmPassword"
//       name="confirmPassword"
//       type={showConfirmPassword ? 'text' : 'password'}
//       required
//       value={formData.confirmPassword}
//       onChange={handleChange}
//       className="block w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-black dark:text-white bg-white dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
//       placeholder="Confirm your password"
//     />
//     <button
//       type="button"
//       className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 dark:text-gray-500"
//       onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//     >
//       {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
//     </button>
//   </div>
// </div>

//             {/* Redirect to Sign In */}
//             <div className="text-center">
//               <span className="text-sm text-gray-600 dark:text-gray-300">
//                 Already have an account?{' '}
//                 <Link to="/signin" className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
//                   Sign in here
//                 </Link>
//               </span>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SignUp



import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { FcGoogle } from 'react-icons/fc'  // For Google icon

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [emailSent, setEmailSent] = useState(false)

  const { signUp, signInWithGoogle } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setEmailSent(false)

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long')
      setLoading(false)
      return
    }

    const { error } = await signUp(formData.email, formData.password, formData.fullName)

    if (error) {
      setError(error.message)
    } else {
      setEmailSent(true) // Show email confirmation message
      // Do NOT navigate immediately, wait for email confirmation
    }

    setLoading(false)
  }

  const handleGoogleSignIn = async () => {
    setLoading(true)
    setError('')
    const { error } = await signInWithGoogle()
    if (error) {
      setError(error.message)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Join Notespedia
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Create your account and start your learning journey
          </p>
        </div>

        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 transition-colors">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Error or Email Sent Messages */}
            {emailSent ? (
              <div className="bg-green-50 border border-green-200 text-green-700 dark:bg-green-900/70 dark:border-green-700 dark:text-green-300 px-4 py-3 rounded-lg text-sm transition-colors">
                Confirmation email sent! Please check your inbox to verify your account.
              </div>
            ) : error ? (
              <div className="bg-red-50 border border-red-200 text-red-600 dark:bg-red-900/70 dark:border-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm transition-colors">
                {error}
              </div>
            ) : null}

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                </div>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-black dark:text-white bg-white dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                  placeholder="Enter your full name"
                  disabled={loading || emailSent}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-black dark:text-white bg-white dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                  placeholder="Enter your email"
                  disabled={loading || emailSent}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-black dark:text-white bg-white dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                  placeholder="Create a password"
                  disabled={loading || emailSent}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 dark:text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  disabled={loading || emailSent}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-black dark:text-white bg-white dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                  placeholder="Confirm your password"
                  disabled={loading || emailSent}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 dark:text-gray-500"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  tabIndex={-1}
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  disabled={loading || emailSent}
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            {!emailSent && (
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {loading ? 'Creating Account...' : 'Create Account'}
                </button>
              </div>
            )}
          </form>

          {/* Or divider */}
          {!emailSent && (
            <div className="my-6 flex items-center before:flex-1 before:border-t before:border-gray-300 before:dark:border-gray-700 after:flex-1 after:border-t after:border-gray-300 after:dark:border-gray-700">
              <p className="mx-4 text-gray-500 dark:text-gray-400">OR</p>
            </div>
          )}

          {/* Google Sign Up Button */}
          {!emailSent && (
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full flex items-center justify-center space-x-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <FcGoogle className="h-5 w-5" />
              <span>Sign Up with Google</span>
            </button>
          )}

          {/* Redirect to Sign In */}
          <div className="mt-6 text-center">
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Already have an account?{' '}
              <Link
                to="/signin"
                className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
              >
                Sign in here
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
