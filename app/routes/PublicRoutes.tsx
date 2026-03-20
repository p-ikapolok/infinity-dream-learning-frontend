import { Routes, Route, Navigate } from "react-router-dom"

import Welcome from "../pages/public/Welcome"
import Home from "../pages/public/Home"
import About from "../pages/public/About"
import Courses from "../pages/public/Courses"
import Pricing from "../pages/public/Pricing"
import Contact from "../pages/public/Contact"

function PublicRoutes() {
  return (
    <Routes>

      {/* Redirect root → welcome */}
      <Route path="/" element={<Navigate to="/welcome" />} />

      {/* Welcome splash */}
      <Route path="/welcome" element={<Welcome />} />

      {/* Actual public pages */}
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
  )
}

export default PublicRoutes