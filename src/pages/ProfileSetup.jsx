import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GraduationCap, Building2, Hash, User } from 'lucide-react'
import { supabase } from '../lib/supabase'
import { useAuth } from '../contexts/AuthContext'

const ProfileSetup = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    branch: '',
    semester: 1,
    college: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { user } = useAuth()
  const navigate = useNavigate()

  const branches = [
    'Computer Science Engineering',
    'Electronics and Communication Engineering',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Mettalurgy Engineering',
    'Engineering and Computational Mechanics',
    'Other'
  ]

  const handleChange = (e) => {
    const value = e.target.name === 'semester' ? parseInt(e.target.value) : e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (!user) {
      setError('User not authenticated')
      setLoading(false)
      return
    }

    try {
      const { error } = await supabase.from('profiles').insert({
        id: user.id,
        email: user.email,
        full_name: formData.full_name,
        branch: formData.branch,
        semester: formData.semester,
        college: formData.college
      })

      if (error) throw error

      navigate('/profile') // redirect to profile after success
    } catch (error) {
      setError(error.message)
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50
                    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
                    flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8
                    transition-colors duration-300">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Complete Your Profile
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Help us personalize your experience by providing some details
          </p>
        </div>

        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-lg
                        border border-gray-100 dark:border-gray-700 p-8
                        transition-colors duration-300">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <label
                htmlFor="full_name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="full_name"
                  name="full_name"
                  type="text"
                  required
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300
                             placeholder-gray-500 text-gray-900 dark:text-gray-100 dark:bg-gray-800 rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="branch"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Branch of Study
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <GraduationCap className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  id="branch"
                  name="branch"
                  required
                  value={formData.branch}
                  onChange={handleChange}
                  className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300
                             text-gray-900 dark:text-gray-100 dark:bg-gray-800 rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="">Select your branch</option>
                  {branches.map((branch) => (
                    <option key={branch} value={branch}>
                      {branch}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="semester"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Current Semester
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Hash className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  id="semester"
                  name="semester"
                  required
                  value={formData.semester}
                  onChange={handleChange}
                  className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300
                             text-gray-900 dark:text-gray-100 dark:bg-gray-800 rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                    <option key={sem} value={sem}>
                      Semester {sem}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="college"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                College/University Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Building2 className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="college"
                  name="college"
                  type="text"
                  required
                  value={formData.college}
                  onChange={handleChange}
                  placeholder="Enter your college name"
                  className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300
                             placeholder-gray-500 text-gray-900 dark:text-gray-100 dark:bg-gray-800 rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent
                           text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                           disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? 'Setting up...' : 'Complete Setup'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProfileSetup
