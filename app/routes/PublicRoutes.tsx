import { Routes, Route } from "react-router-dom"

import PublicLayout from "../layouts/PublicLayout"

import Home from "../pages/public/Home"
import Courses from "../pages/public/Courses"
import About from "../pages/public/About"
import Pricing from "../pages/public/Pricing"
import Contact from "../pages/public/Contact"

function PublicRoutes() {
  return (
    <PublicLayout>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </PublicLayout>
  )
}

export default PublicRoutes