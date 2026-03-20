import { useEffect, useState } from "react"
import { getCourses } from "../../api/course.api"
import CourseCard from "../../components/cards/CourseCard"

interface Course {
  id: string
  title: string
  description: string
}

export default function Home() {
  const [courses, setCourses] = useState<Course[]>([])
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
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-700 dark:text-gray-300">Loading courses...</p>
      </div>
    )
  }

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-700 mb-2">Infinity Dream Learning</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">AI-powered learning platform</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Popular Courses</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} title={course.title} description={course.description} />
          ))}
        </div>
      </section>
    </div>
  )
}