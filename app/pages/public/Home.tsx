import { useEffect, useState } from "react"
import { getCourses } from "../../api/course.api"
import CourseCard from "../../components/cards/CourseCard"
import { Link } from "react-router-dom"

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

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">

      {/* HERO SECTION */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">
          Learn Smarter with AI
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Courses, community, and AI-powered learning — all in one platform designed to help you grow faster.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            to="/hub"
            className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
          >
            Get Started
          </Link>

          <Link
            to="/courses"
            className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Browse Courses
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-6 py-12">

        <div className="p-6 rounded-2xl shadow bg-white dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-2">AI Learning Assistant</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Ask questions and get instant AI-powered explanations anytime.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow bg-white dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-2">Live Classes</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Join interactive sessions and learn in real time with instructors.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow bg-white dark:bg-gray-800">
          <h3 className="text-xl font-semibold mb-2">Community</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Connect, share, and grow with other learners worldwide.
          </p>
        </div>

      </section>

      {/*  COURSES SECTION */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">
          Popular Courses
        </h2>

        {loading ? (
          <div className="flex justify-center">
            <p className="text-gray-600 dark:text-gray-300">Loading courses...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                description={course.description}
              />
            ))}
          </div>
        )}
      </section>

      {/*  CTA SECTION */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Learning Journey Today
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Join thousands of learners using AI to improve their skills.
        </p>

        <Link
          to="/hub"
          className="px-8 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
        >
          Join Now
        </Link>
      </section>

    </div>
  )
}