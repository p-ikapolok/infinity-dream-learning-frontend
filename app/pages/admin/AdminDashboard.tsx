import { useEffect, useState } from "react"
import { getUsers, deleteUser } from "../../api/admin.api"

interface User {
  id: string
  email: string
}

export default function AdminDashboard() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    const data = await getUsers()
    setUsers(data)
  }

  const handleDelete = async (id: string) => {
    await deleteUser(id)
    loadUsers()
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Admin Panel</h2>
      <div className="space-y-2">
        {users.map((u) => (
          <div key={u.id} className="p-2 border rounded flex justify-between items-center bg-white dark:bg-gray-800">
            <p className="text-gray-700 dark:text-gray-300">{u.email}</p>
            <button
              onClick={() => handleDelete(u.id)}
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}