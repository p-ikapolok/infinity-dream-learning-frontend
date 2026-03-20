import { useEffect, useState } from "react"
import { getUsers, deleteUser } from "../../api/admin.api"
import CreateCourse from "../../components/admin/CreateCourse"

function AdminDashboard() {

  const [users, setUsers] = useState<any[]>([])

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
    <div className="p-6 space-y-6">

      <h2 className="text-2xl font-bold">Admin Panel</h2>

      <CreateCourse />

      <div className="space-y-2">
        {users.map((u) => (
          <div key={u.id} className="flex justify-between p-3 bg-white dark:bg-slate-800 rounded-xl shadow">

            <p>{u.email}</p>

            <button
              onClick={() => handleDelete(u.id)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg"
            >
              Delete
            </button>

          </div>
        ))}
      </div>

    </div>
  )
}

export default AdminDashboard