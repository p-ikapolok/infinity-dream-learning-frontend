import { useEffect, useState } from "react"
import { getCertificates } from "../../api/course.api"

interface Certificate {
  id: string
  course: string
  issued: string
}

export default function Certificates() {
  const [certs, setCerts] = useState<Certificate[]>([])

  useEffect(() => {
    async function load() {
      const data = await getCertificates()
      setCerts(data)
    }
    load()
  }, [])

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Certificates</h2>
      <ul className="space-y-2">
        {certs.map((c) => (
          <li key={c.id} className="p-3 border rounded bg-white dark:bg-gray-800">
            <p className="font-semibold">{c.course}</p>
            <p className="text-gray-500 dark:text-gray-400">Issued: {c.issued}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}