import { useEffect, useState } from "react"
import LessonCard from "../../components/cards/LessonCard"
import { getLessons } from "../../api/lesson.api"

interface Lesson {
  id: string
  title: string
  description: string
}

export default function Lessons() {
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetch = async () => {
      const data = await getLessons()
      setLessons(data)
      setLoading(false)
    }
    fetch()
  }, [])

  if (loading) return <p className="p-6">Loading lessons...</p>

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {lessons.map((lesson) => (
        <LessonCard key={lesson.id} title={lesson.title} description={lesson.description} />
      ))}
    </div>
  )
}