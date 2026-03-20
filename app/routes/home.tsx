// routes/home.tsx
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getCourses } from "../api/course.api"
import CourseCard from "../components/cards/CourseCard"

interface Course {
  id: string
  title: string
  description: string
}

export default function Home() {
  const navigate = useNavigate()
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Redirect splash
    const timer = setTimeout(() => {
      navigate("/home") // stays on same route if needed
    }, 2000)

    // Load courses
    loadCourses()

    return () => clearTimeout(timer)
  }, [navigate])

  const loadCourses = async () => {
    try {
      const data = await getCourses()
      setCourses(data)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-700 dark:text-gray-300">Loading courses...</p>
      </div>
    )
  }

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-purple-700 mb-2">Infinity Dream Learning</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">AI-powered learning platform</p>

      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Popular Courses</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} title={course.title} description={course.description} />
        ))}
      </div>
    </div>
  )
}