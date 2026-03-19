import { useEffect, useState } from "react"
import { getCourses } from "../../api/course.api"
import CourseCard from "../../components/cards/CourseCard"

function Dashboard() {

  const [courses, setCourses] = useState<any[]>([])

  useEffect(() => {
    loadCourses()
  }, [])

  const loadCourses = async () => {
    const data = await getCourses()
    setCourses(data)
  }

  return (
    <div>

      <h2>Learning Dashboard</h2>

      <div className="course-grid">

        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            description={course.description}
          />
        ))}

      </div>

    </div>
  )
}

export default Dashboard