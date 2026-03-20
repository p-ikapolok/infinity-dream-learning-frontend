// Path: src/routes/PublicRoutes.tsx
import { Routes, Route } from "react-router-dom"
import Welcome from "../pages/public/Welcome"
import Home from "../pages/public/Home"
import Courses from "../pages/public/Courses"
import Pricing from "../pages/public/Pricing"
import Contact from "../pages/public/Contact"

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}