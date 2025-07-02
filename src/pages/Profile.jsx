import React, { useState, useEffect } from 'react'
import {
  User,
  Mail,
  GraduationCap,
  Building2,
  Hash,
  Edit2,
  Save,
  X,
  PlusCircle
} from 'lucide-react'
import { supabase } from '../lib/supabase'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate, useLocation } from 'react-router-dom'

const Profile = () => {
  const [profile, setProfile] = useState(null)
  const [userNotes, setUserNotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [notesLoading, setNotesLoading] = useState(false)
  const [editing, setEditing] = useState(false)
  const [editData, setEditData] = useState({})
  const [error, setError] = useState('')
  const { user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

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

  useEffect(() => {
    if (user) {
      fetchProfile()
      fetchUserNotes()
    }
  }, [user])

  // Listen for navigation state refreshNotes flag
  useEffect(() => {
    if (location.state?.refreshNotes) {
      fetchUserNotes()
      // Clear state so this effect doesn't run again unnecessarily
      navigate(location.pathname, { replace: true })
    }
  }, [location.state, navigate, location.pathname])

  const fetchProfile = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('id, email, full_name, branch, semester, college')
        .eq('id', user.id)
        .single()

      if (error || !data) {
        navigate('/setup')
        return
      }

      setProfile(data)
      setEditData(data)
    } catch (err) {
      console.error('Error fetching profile:', err)
    } finally {
      setLoading(false)
    }
  }

  const fetchUserNotes = async () => {
    setNotesLoading(true)
    try {
      const { data, error } = await supabase
        .from('notes')
        .select('id, title, description, subject, semester, file_size, created_at, downloads, rating')
        .eq('uploaded_by', user.id)
        .order('created_at', { ascending: false })

      if (error) throw error
      setUserNotes(data || [])
    } catch (err) {
      console.error('Error fetching user notes:', err)
    } finally {
      setNotesLoading(false)
    }
  }

  const handleEdit = () => {
    setEditing(true)
    setEditData(profile)
    setError('')
  }

  const handleCancel = () => {
    setEditing(false)
    setEditData(profile)
    setError('')
  }

  const handleChange = (e) => {
    const value = e.target.name === 'semester' ? parseInt(e.target.value) : e.target.value
    setEditData({
      ...editData,
      [e.target.name]: value
    })
  }

  const handleSave = async () => {
    setError('')
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: editData.full_name,
          branch: editData.branch,
          semester: editData.semester,
          college: editData.college
        })
        .eq('id', user.id)

      if (error) throw error
      setProfile(editData)
      setEditing(false)
    } catch (err) {
      setError(err.message)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const idx = Math.floor(Math.log(bytes) / Math.log(k))
    return `${(bytes / Math.pow(k, idx)).toFixed(2)} ${sizes[idx]}`
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700 dark:text-gray-300">
        <p>User profile not found. Redirecting...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Profile card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-10 flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <div className="bg-white rounded-full p-4">
              <User className="h-14 w-14 text-blue-600" />
            </div>
            <div className="flex-1 text-center sm:text-left text-white">
              <h1 className="text-3xl font-extrabold mb-1">{profile.full_name}</h1>
              <p className="opacity-90 text-lg">{profile.email}</p>
              <p className="mt-2 text-sm opacity-70">
                Branch: <strong>{profile.branch}</strong> | Semester: <strong>{profile.semester}</strong> | College: <strong>{profile.college}</strong>
              </p>
            </div>
            {!editing && (
              <button
                onClick={handleEdit}
                className="self-center sm:self-start bg-white/25 hover:bg-white/40 transition-colors text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg"
                aria-label="Edit profile"
              >
                <Edit2 className="w-5 h-5" />
                Edit Profile
              </button>
            )}
          </div>

          {/* Editable form */}
          {editing && (
            <div className="px-8 py-6 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white">
              {error && (
                <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded mb-6">
                  {error}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="full_name" className="block font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    value={editData.full_name || ''}
                    onChange={handleChange}
                    className="w-full rounded border border-gray-300 dark:border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-800"
                  />
                </div>

                <div>
                  <label htmlFor="branch" className="block font-medium mb-1">
                    Branch
                  </label>
                  <select
                    id="branch"
                    name="branch"
                    value={editData.branch || ''}
                    onChange={handleChange}
                    className="w-full rounded border border-gray-300 dark:border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-800"
                  >
                    {branches.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="semester" className="block font-medium mb-1">
                    Semester
                  </label>
                  <select
                    id="semester"
                    name="semester"
                    value={editData.semester || ''}
                    onChange={handleChange}
                    className="w-full rounded border border-gray-300 dark:border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-800"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
                      <option key={s} value={s}>
                        Semester {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-3">
                  <label htmlFor="college" className="block font-medium mb-1">
                    College
                  </label>
                  <input
                    id="college"
                    name="college"
                    type="text"
                    value={editData.college || ''}
                    onChange={handleChange}
                    className="w-full rounded border border-gray-300 dark:border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-800"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <button
                  onClick={handleCancel}
                  className="px-5 py-2 border border-gray-300 rounded hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Notes Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Your Notes ({userNotes.length})
            </h2>
            <button
              onClick={() => navigate('/upload', { state: { fromProfile: true } })}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 shadow-lg transition"
              aria-label="Upload new note"
            >
              <PlusCircle className="w-5 h-5" />
              Upload New Note
            </button>
          </div>

          {notesLoading ? (
            <p className="text-gray-600 dark:text-gray-400">Loading notes...</p>
          ) : userNotes.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 text-center py-12">
              You haven't uploaded any notes yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {userNotes.map((note) => (
                <div
                  key={note.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col justify-between transition-shadow"
                >
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {note.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{note.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                        {note.subject}
                      </span>
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                        Sem {note.semester}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-auto pt-3 border-t border-gray-200 dark:border-gray-700">
                    <span>{formatFileSize(note.file_size)}</span>
                    <span>{formatDate(note.created_at)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
                    <span>{note.downloads ?? 0} downloads</span>
                    <span>★ {(note.rating ?? 0).toFixed(1)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default Profile
