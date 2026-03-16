import { useEffect, useState } from "react"
import { getCourses } from "../../api/course.api"
import CourseCard from "../../components/cards/CourseCard"

function Home() {

  const [courses, setCourses] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadCourses()
  }, [])

  const loadCourses = async () => {
    try {
      const data = await getCourses()
      setCourses(data)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div>Loading courses...</div>
  }

  return (
    <div className="home-page">

      <section>

        <h1>Infinity Dream Learning</h1>
        <p>AI-powered learning platform</p>

      </section>

      <section>

        <h2>Popular Courses</h2>

        <div className="course-grid">

          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
            />
          ))}

        </div>

      </section>

    </div>
  )
}

export default Home
