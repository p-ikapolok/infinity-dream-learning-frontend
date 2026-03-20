import { useEffect, useState } from "react"
import { getRecommendations } from "../../api/ai.api"

export default function AIRecommendation({ userId }: { userId: string }) {
  const [recommendations, setRecommendations] = useState<string[]>([])

  useEffect(() => {
    async function load() {
      const data = await getRecommendations(userId)
      setRecommendations(data)
    }
    load()
  }, [userId])

  return (
    <div className="p-4 border rounded shadow bg-white dark:bg-gray-800 mt-4">
      <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Recommended for you</h4>
      <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
        {recommendations.map((rec, i) => (
          <li key={i}>{rec}</li>
        ))}
      </ul>
    </div>
  )
}