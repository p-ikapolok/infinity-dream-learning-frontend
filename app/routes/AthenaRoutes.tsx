import { Routes, Route } from "react-router-dom"
import AthenaLayout from "../layouts/AthenaLayout"

import Dashboard from "../pages/athena/Dashboard"
import Courses from "../pages/athena/Courses"
import Lessons from "../pages/athena/Lessons"
import Scheduler from "../pages/athena/Scheduler"
import LiveClasses from "../pages/athena/LiveClasses"
import Teams from "../pages/athena/Teams"
import Community from "../pages/athena/Community"
import Support from "../pages/athena/Support"
import AI from "../pages/athena/AI"
import Certificates from "../pages/athena/Certificates"

function AthenaRoutes() {
  return (
    <AthenaLayout>
      <Routes>

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="courses" element={<Courses />} />
        <Route path="lessons" element={<Lessons />} />
        <Route path="scheduler" element={<Scheduler />} />
        <Route path="live-classes" element={<LiveClasses />} />
        <Route path="teams" element={<Teams />} />
        <Route path="community" element={<Community />} />
        <Route path="support" element={<Support />} />
        <Route path="ai" element={<AI />} />
        <Route path="certificates" element={<Certificates />} />

      </Routes>
    </AthenaLayout>
  )
}

export default AthenaRoutes