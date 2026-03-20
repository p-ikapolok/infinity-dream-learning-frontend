import { useEffect, useState } from "react"
import { getSchedule } from "../../api/scheduler.api"

interface Event {
  id: string
  title: string
  date: string
  time: string
}

export default function Scheduler() {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    async function load() {
      const data = await getSchedule()
      setEvents(data)
    }
    load()
  }, [])

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Scheduler</h2>
      <ul className="space-y-2">
        {events.map((e) => (
          <li key={e.id} className="p-3 border rounded bg-white dark:bg-gray-800">
            <p className="font-semibold">{e.title}</p>
            <p className="text-gray-500 dark:text-gray-400">{e.date} @ {e.time}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}