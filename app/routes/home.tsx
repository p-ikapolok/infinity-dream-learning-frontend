// src/routes/home.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCourses } from "../api/course.api";
import CourseCard from "../components/cards/CourseCard";

interface Course {
  id: string;
  title: string;
  description: string;
}

export default function Home() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      const data = await getCourses();
      setCourses(data);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Loading courses...
        </p>
      </div>
    );
  }

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto text-center">
      {/* Header */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-purple-700 mb-2">
          Infinity Dream Learning
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          AI-powered learning platform
        </p>

        {/* Login/Register buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/auth/login")}
            className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/auth/register")}
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
          >
            Register
          </button>
        </div>
      </section>

      {/* Popular Courses */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          Popular Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
}