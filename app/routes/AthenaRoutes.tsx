// Path: src/routes/AthenaRoutes.tsx
import { Routes, Route } from "react-router-dom"

import Dashboard from "../pages/athena/dashboard"
import Lessons from "../pages/athena/lessons"
import LiveClasses from "../pages/athena/liveclasses"
import Teams from "../pages/athena/teams"
import Scheduler from "../pages/athena/scheduler"
import Certificates from "../pages/athena/certificates"

export default function AthenaRoutes() {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="lessons" element={<Lessons />} />
      <Route path="live-classes" element={<LiveClasses />} />
      <Route path="teams" element={<Teams />} />
      <Route path="scheduler" element={<Scheduler />} />
      <Route path="certificates" element={<Certificates />} />
    </Routes>
  )
}// Path: src/routes/AthenaRoutes.tsx
import { Routes, Route } from "react-router-dom"

import Dashboard from "../pages/athena/dashboard"
import Lessons from "../pages/athena/lessons"
import LiveClasses from "../pages/athena/liveclasses"
import Teams from "../pages/athena/teams"
import Scheduler from "../pages/athena/scheduler"
import Certificates from "../pages/athena/certificates"

export default function AthenaRoutes() {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="lessons" element={<Lessons />} />
      <Route path="live-classes" element={<LiveClasses />} />
      <Route path="teams" element={<Teams />} />
      <Route path="scheduler" element={<Scheduler />} />
      <Route path="certificates" element={<Certificates />} />
    </Routes>
  )
}