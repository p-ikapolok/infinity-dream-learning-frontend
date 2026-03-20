// src/routes/PublicRoutes.tsx
import { Routes, Route } from "react-router-dom"
import Welcome from "../pages/public/welcome"
import Home from "../pages/public/Home"
import About from "../pages/public/About"
import Courses from "../pages/public/Courses"
import Pricing from "../pages/public/Pricing"
import Contact from "../pages/public/Contact"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default PublicRoutes