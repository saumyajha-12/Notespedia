import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../lib/supabase'

const NoteDetail = () => {
  const { id } = useParams()
  const [note, setNote] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchNote = async () => {
      setLoading(true)
      const { data, error } = await supabase
        .from('notes')
        .select('*')
        .eq('id', id)
        .single()
      if (error) {
        setError(error.message)
      } else {
        setNote(data)
      }
      setLoading(false)
    }

    fetchNote()
  }, [id])

  if (loading) return <p>Loading note...</p>
  if (error) return <p>Error: {error}</p>
  if (!note) return <p>Note not found.</p>

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{note.title}</h1>
      <p className="mb-4">{note.description}</p>
      {/* Add more fields here like subject, semester, etc. */}
      {/* Add link or button to download file if applicable */}
    </div>
  )
}

export default NoteDetail
