
// import React, { useState, useEffect } from 'react'
// import { Search, Download, Star, Eye } from 'lucide-react'
// import { supabase } from '../lib/supabase'

// const Browse = () => {
//   const [notes, setNotes] = useState([])
//   const [filteredNotes, setFilteredNotes] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [searchTerm, setSearchTerm] = useState('')
//   const [selectedBranch, setSelectedBranch] = useState('')
//   const [selectedSemester, setSelectedSemester] = useState('')

//   const branches = [
//     'Computer Science Engineering',
//     'Electronics and Communication Engineering',
//     'Electrical Engineering',
//     'Mechanical Engineering',
//     'Civil Engineering',
//     'Production Engineering',
//     'Mettalurgy Engineering',
//     'Engineering and Computational Mechanics'
//   ]

//   useEffect(() => {
//     fetchNotes()
//   }, [])

//   useEffect(() => {
//     filterNotes()
//   }, [notes, searchTerm, selectedBranch, selectedSemester])

//   const fetchNotes = async () => {
//     try {
//       const { data, error } = await supabase
//         .from('notes')
//         .select(`*, profiles!inner(id, full_name)`) // ensure profiles join and id exists
//         .order('created_at', { ascending: false })

//       if (error) throw error
//       console.log('Fetched notes:', data)
//       setNotes(data || [])
//     } catch (error) {
//       console.error('Error fetching notes:', error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const filterNotes = () => {
//     let filtered = notes
//     if (searchTerm) {
//       filtered = filtered.filter(note =>
//         note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         note.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         note.subject.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     }
//     if (selectedBranch) {
//       filtered = filtered.filter(note => note.branch === selectedBranch)
//     }
//     if (selectedSemester) {
//       filtered = filtered.filter(note => note.semester === parseInt(selectedSemester))
//     }
//     setFilteredNotes(filtered)
//   }

//   const handleDownload = async (noteId, fileUrl, fileName) => {
//     try {
//       const note = notes.find(n => n.id === noteId)
//       await supabase
//         .from('notes')
//         .update({ downloads: note.downloads + 1 })
//         .eq('id', noteId)

//       const link = document.createElement('a')
//       link.href = fileUrl
//       link.download = fileName
//       link.click()

//       setNotes(notes.map(note =>
//         note.id === noteId ? { ...note, downloads: note.downloads + 1 } : note
//       ))
//     } catch (error) {
//       console.error('Error downloading file:', error)
//     }
//   }

//   const formatFileSize = (bytes) => {
//     if (bytes === 0) return '0 Bytes'
//     const k = 1024
//     const sizes = ['Bytes', 'KB', 'MB', 'GB']
//     const i = Math.floor(Math.log(bytes) / Math.log(k))
//     return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
//   }

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
//         <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold mb-4">Browse Notes</h1>

//           <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//               <div className="md:col-span-2 relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//                 <input
//                   type="text"
//                   placeholder="Search notes, subjects..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <select
//                 value={selectedBranch}
//                 onChange={(e) => setSelectedBranch(e.target.value)}
//                 className="py-2 px-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               >
//                 <option value="">All Branches</option>
//                 {branches.map(branch => (
//                   <option key={branch} value={branch}>{branch}</option>
//                 ))}
//               </select>

//               <select
//                 value={selectedSemester}
//                 onChange={(e) => setSelectedSemester(e.target.value)}
//                 className="py-2 px-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               >
//                 <option value="">All Semesters</option>
//                 {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
//                   <option key={sem} value={sem}>Semester {sem}</option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <p className="text-gray-600 dark:text-gray-400 mb-4">
//             Found {filteredNotes.length} notes
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredNotes.map((note) => (
//             <div key={note.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
//               <div className="mb-4">
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{note.title}</h3>
//                 <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-3">{note.description}</p>

//                 <div className="flex flex-wrap gap-2 mb-3">
//                   <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded">
//                     {note.subject}
//                   </span>
//                   <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-medium px-2.5 py-0.5 rounded">
//                     Sem {note.semester}
//                   </span>
//                   <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs font-medium px-2.5 py-0.5 rounded">
//                     {note.branch.split(' ').slice(0, 2).join(' ')}
//                   </span>
//                 </div>
//               </div>

//               <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
//                 <span>By {note.profiles?.full_name || 'Anonymous'}</span>
//                 <span>{formatFileSize(note.file_size)}</span>
//               </div>

//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
//                   <div className="flex items-center">
//                     <Download className="h-4 w-4 mr-1" />
//                     {note.downloads}
//                   </div>
//                   <div className="flex items-center">
//                     <Star className="h-4 w-4 mr-1 fill-current text-yellow-400" />
//                     {note.rating.toFixed(1)}
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => handleDownload(note.id, note.file_url, note.file_name)}
//                   className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-1"
//                 >
//                   <Download className="h-4 w-4" />
//                   <span>Download</span>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {filteredNotes.length === 0 && (
//           <div className="text-center py-12">
//             <Eye className="h-24 w-24 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
//             <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No notes found</h3>
//             <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Browse

import React, { useState, useEffect } from 'react'
import { Search, Download, Star, Eye } from 'lucide-react'
import { supabase } from '../lib/supabase'

const Browse = () => {
  const [notes, setNotes] = useState([])
  const [filteredNotes, setFilteredNotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBranch, setSelectedBranch] = useState('')
  const [selectedSemester, setSelectedSemester] = useState('')

  const branches = [
    'Computer Science Engineering',
    'Electronics and Communication Engineering',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Production Engineering',
    'Mettalurgy Engineering',
    'Engineering and Computational Mechanics'
  ]

  useEffect(() => {
    fetchNotes()
  }, [])

  useEffect(() => {
    filterNotes()
  }, [notes, searchTerm, selectedBranch, selectedSemester])

  const fetchNotes = async () => {
    try {
      const { data: notesData, error: notesError } = await supabase
        .from('notes')
        .select('*')
        .order('created_at', { ascending: false })

      if (notesError) throw notesError

      const uploaderIds = [...new Set(notesData.map(note => note.uploaded_by).filter(Boolean))]

      const { data: profilesData, error: profilesError } = await supabase
        .from('profiles')
        .select('id, full_name')
        .in('id', uploaderIds)

      if (profilesError) throw profilesError

      const profilesMap = Object.fromEntries(profilesData.map(profile => [profile.id, profile.full_name]))

      const notesWithNames = notesData.map(note => ({
        ...note,
        uploader_name: profilesMap[note.uploaded_by] || 'Anonymous'
      }))

      setNotes(notesWithNames)
    } catch (error) {
      console.error('Error fetching notes or profiles:', error)
    } finally {
      setLoading(false)
    }
  }

  const filterNotes = () => {
    let filtered = notes
    if (searchTerm) {
      filtered = filtered.filter(note =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.subject.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    if (selectedBranch) {
      filtered = filtered.filter(note => note.branch === selectedBranch)
    }
    if (selectedSemester) {
      filtered = filtered.filter(note => note.semester === parseInt(selectedSemester))
    }
    setFilteredNotes(filtered)
  }

  const handleDownload = async (noteId, fileUrl, fileName) => {
    try {
      const note = notes.find(n => n.id === noteId)
      await supabase
        .from('notes')
        .update({ downloads: note.downloads + 1 })
        .eq('id', noteId)

      const link = document.createElement('a')
      link.href = fileUrl
      link.download = fileName
      link.click()

      setNotes(notes.map(note =>
        note.id === noteId ? { ...note, downloads: note.downloads + 1 } : note
      ))
    } catch (error) {
      console.error('Error downloading file:', error)
    }
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Browse Notes</h1>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search notes, subjects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <select
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                className="py-2 px-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Branches</option>
                {branches.map(branch => (
                  <option key={branch} value={branch}>{branch}</option>
                ))}
              </select>

              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="py-2 px-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Semesters</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                  <option key={sem} value={sem}>Semester {sem}</option>
                ))}
              </select>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Found {filteredNotes.length} notes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note) => (
            <div key={note.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{note.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-3">{note.description}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded">
                    {note.subject}
                  </span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-medium px-2.5 py-0.5 rounded">
                    Sem {note.semester}
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs font-medium px-2.5 py-0.5 rounded">
                    {note.branch.split(' ').slice(0, 2).join(' ')}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span>By {note.uploader_name}</span>
                <span>{formatFileSize(note.file_size)}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Download className="h-4 w-4 mr-1" />
                    {note.downloads}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-current text-yellow-400" />
                    {(note.rating ?? 0).toFixed(1)}
                  </div>
                </div>

                <button
                  onClick={() => handleDownload(note.id, note.file_url, note.file_name)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-1"
                >
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <div className="text-center py-12">
            <Eye className="h-24 w-24 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No notes found</h3>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Browse

