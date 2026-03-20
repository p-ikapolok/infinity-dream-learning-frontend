// Path: src/routes/PublicRoutes.tsx
import { Routes, Route, Navigate } from "react-router-dom"

import Home from "../routes/home" // Use your route home file
import About from "../pages/public/About"
import Courses from "../pages/public/Courses"
import Pricing from "../pages/public/Pricing"
import Contact from "../pages/public/Contact"
import Welcome from "../pages/public/Welcome"

export default function PublicRoutes() {
  return (
    <Routes>
      {/* Splash welcome page */}
      <Route path="/welcome" element={<Welcome />} />

      {/* Redirect root → welcome */}
      <Route path="/" element={<Navigate to="/welcome" />} />

      {/* Actual public pages */}
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}