import { useEffect, useState } from "react"

export default function EHubDashboard() {
  const [welcome, setWelcome] = useState("")

  useEffect(() => {
    setWelcome("Welcome to the EHub Community!")
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-700">{welcome}</h1>
      <p className="text-gray-600 dark:text-gray-300 mt-2">Explore courses, community feed, and AI support.</p>
    </div>
  )
}