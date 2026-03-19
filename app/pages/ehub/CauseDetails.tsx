import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCourseById, enrollCourse } from "../../api/course.api"

function CourseDetails() {

  const { id } = useParams()

  const [course, setCourse] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [enrolling, setEnrolling] = useState(false)

  useEffect(() => {
    loadCourse()
  }, [id])

  const loadCourse = async () => {
    try {
      const data = await getCourseById(id!)
      setCourse(data)
    } finally {
      setLoading(false)
    }
  }

  const handleEnroll = async () => {
    setEnrolling(true)

    try {
      await enrollCourse(id!)
      alert("Enrolled successfully")
    } catch {
      alert("Enrollment failed")
    } finally {
      setEnrolling(false)
    }
  }

  if (loading) return <p>Loading...</p>

  return (
    <div>

      <h2>{course.title}</h2>

      <p>{course.description}</p>

      <button onClick={handleEnroll} disabled={enrolling}>
        {enrolling ? "Enrolling..." : "Enroll"}
      </button>

    </div>
  )
}

export default CourseDetails
