import { useEffect, useState } from "react"
import { getAnalytics } from "../../api/analytics.api"

function Analytics() {

  const [data, setData] = useState<any>(null)

  useEffect(() => {
    load()
  }, [])

  const load = async () => {
    const res = await getAnalytics()
    setData(res)
  }

  if (!data) return <p>Loading...</p>

  return (
    <div>

      <h2>Analytics</h2>

      <p>Total Users: {data.users}</p>
      <p>Total Courses: {data.courses}</p>
      <p>Revenue: ${data.revenue}</p>

    </div>
  )
}

export default Analytics