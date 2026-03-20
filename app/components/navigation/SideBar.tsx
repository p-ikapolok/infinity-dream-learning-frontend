import { Link } from "react-router-dom"
import { useState } from "react"

export default function SideBar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside className={`bg-white dark:bg-gray-900 p-4 h-screen ${collapsed ? "w-20" : "w-64"} transition-width`}>
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="mb-6 px-2 py-1 bg-purple-700 text-white rounded"
      >
        {collapsed ? "→" : "←"}
      </button>
      <nav className="flex flex-col gap-3">
        <Link to="/hub/dashboard" className="hover:text-purple-700">Dashboard</Link>
        <Link to="/hub/community" className="hover:text-purple-700">Community</Link>
        <Link to="/hub/ask-ai" className="hover:text-purple-700">Ask AI</Link>
      </nav>
    </aside>
  )
}