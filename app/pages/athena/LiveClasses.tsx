import { useEffect, useState } from "react"

interface LiveClass {
  id: string
  title: string
  time: string
}

export default function LiveClasses() {
  const [classes, setClasses] = useState<LiveClass[]>([])

  useEffect(() => {
    setClasses([
      { id: "1", title: "React Basics Live", time: "10:00 AM" },
      { id: "2", title: "AI for Education", time: "2:00 PM" },
    ])
  }, [])

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Live Classes</h2>
      <ul className="space-y-2">
        {classes.map((c) => (
          <li key={c.id} className="p-3 border rounded bg-white dark:bg-gray-800">
            <p className="font-semibold">{c.title}</p>
            <p className="text-gray-500 dark:text-gray-400">{c.time}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}