import { useEffect, useState } from "react"
import { getAnalytics } from "../../api/analytics.api"

export default function Analytics() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    load()
  }, [])

  const load = async () => {
    const res = await getAnalytics()
    setData(res)
  }

  if (!data) return <p className="p-6">Loading analytics...</p>

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Analytics Dashboard</h2>
      <p>Total Users: {data.users}</p>
      <p>Total Courses: {data.courses}</p>
      <p>Revenue: ${data.revenue}</p>
    </div>
  )
}