import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCourses } from "../api/course.api";
import CourseCard from "../components/cards/CourseCard";

interface Course {
  id: string;
  title: string;
  description: string;
  image?: string;
}

export function meta() {
  return [
    { title: "Infinity Dream Learning" },
    { name: "description", content: "AI-powered learning platform" },
  ];
}

export default function Home() {
  const [courses, setCourses] = useState<Course[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCourses().then((data) => setCourses(data || []));
  }, []);

  return (
    <div className="homepage-container" style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      {/* Hero Section */}
      <section className="hero" style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>Infinity Dream Learning</h1>
        <p style={{ fontSize: "1.2rem", margin: "1rem 0" }}>AI-powered learning platform</p>
        <div style={{ marginTop: "2rem" }}>
          <button
            onClick={() => navigate("/register")}
            style={{
              padding: "0.8rem 1.5rem",
              marginRight: "1rem",
              backgroundColor: "#7C3AED",
              color: "#fff",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
            }}
          >
            Register
          </button>
          <button
            onClick={() => navigate("/login")}
            style={{
              padding: "0.8rem 1.5rem",
              backgroundColor: "#06B6D4",
              color: "#fff",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses">
        <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Available Courses</h2>
        <div
          className="courses-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {courses.length > 0 ? (
            courses.map((course) => <CourseCard key={course.id} course={course} />)
          ) : (
            <p>No courses available yet.</p>
          )}
        </div>
      </section>

      {/* Banner / Additional Public Content */}
      <section className="banner" style={{ marginTop: "4rem", textAlign: "center" }}>
        <h2>Learn at your pace, anywhere, anytime</h2>
        <p>Join thousands of learners and explore new skills with our AI-powered platform.</p>
      </section>
    </div>
  );
}