import { useState } from "react"
import { createCourse } from "../../api/admin.api"

export default function CreateCourse() {
  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")

  const handleCreate = async () => {
    if (!title.trim()) return
    await createCourse(title)
    setMessage("Course created successfully!")
    setTitle("")
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Create Course</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Course title"
        className="p-2 border rounded w-full mb-2 dark:bg-gray-700 dark:text-white"
      />
      <button
        onClick={handleCreate}
        className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800"
      >
        Create
      </button>
      {message && <p className="mt-2 text-green-600 dark:text-green-400">{message}</p>}
    </div>
  )
}