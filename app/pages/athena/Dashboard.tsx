import { useEffect, useState } from "react"

export default function AthenaDashboard() {
  const [welcome, setWelcome] = useState("")

  useEffect(() => {
    setWelcome("Welcome to Athena Learning Portal")
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-700">{welcome}</h1>
      <p className="text-gray-600 dark:text-gray-300 mt-2">
        Access courses, AI recommendations, live classes, and your schedule.
      </p>
    </div>
  )
}