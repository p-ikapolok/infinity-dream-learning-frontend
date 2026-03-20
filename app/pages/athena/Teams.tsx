import { useEffect, useState } from "react"

interface Team {
  id: string
  name: string
  members: number
}

export default function Teams() {
  const [teams, setTeams] = useState<Team[]>([])

  useEffect(() => {
    setTeams([
      { id: "1", name: "React Learners", members: 12 },
      { id: "2", name: "AI Enthusiasts", members: 8 },
    ])
  }, [])

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Teams</h2>
      <div className="space-y-2">
        {teams.map((team) => (
          <div key={team.id} className="p-3 border rounded bg-white dark:bg-gray-800">
            <p className="font-semibold">{team.name}</p>
            <p className="text-gray-500 dark:text-gray-400">Members: {team.members}</p>
          </div>
        ))}
      </div>
    </div>
  )
}