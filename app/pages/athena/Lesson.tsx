import { useEffect, useState } from "react"
import { getLessons } from "../../api/lesson.api"
import LessonCard from "../../components/cards/LessonCard"

function Lessons() {

  const [lessons, setLessons] = useState<any[]>([])

  useEffect(() => {
    loadLessons()
  }, [])

  const loadLessons = async () => {
    const data = await getLessons("default-course")
    setLessons(data)
  }

  return (
    <div>

      <h2>Lessons</h2>

      <div>

        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            title={lesson.title}
            duration={lesson.duration}
          />
        ))}

      </div>

    </div>
  )
}

export default Lessons