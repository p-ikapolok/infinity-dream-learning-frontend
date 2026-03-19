import { useState } from "react"
import http from "../../api/http"

function CreateCourse() {

  const [title, setTitle] = useState("")

  const create = async () => {
    await http.post("/admin/courses", { title })
    setTitle("")
  }

  return (
    <div className="space-y-2">

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Course title"
        className="w-full p-2 border rounded-lg dark:bg-slate-800"
      />

      <button
        onClick={create}
        className="bg-purple-600 text-white px-4 py-2 rounded-lg"
      >
        Create Course
      </button>

    </div>
  )
}

export default CreateCourse