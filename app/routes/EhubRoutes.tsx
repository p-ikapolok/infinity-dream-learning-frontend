// Path: src/routes/EHubRoutes.tsx
import { Routes, Route } from "react-router-dom"

import Dashboard from "../pages/ehub/dashboard"
import Community from "../pages/ehub/community"
import AskAI from "../pages/ehub/askai"

export default function EHubRoutes() {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="community" element={<Community />} />
      <Route path="ask-ai" element={<AskAI />} />
    </Routes>
  )
}import { Routes, Route } from "react-router-dom"
import EHubLayout from "../layouts/EHubLayout"

import EHubDashboard from "../pages/ehub/EHubDashboard"
import CourseCatalog from "../pages/ehub/CourseCatalog"
import Community from "../pages/ehub/Community"
import Events from "../pages/ehub/Events"
import AskAI from "../pages/ehub/AskAI"
import Profile from "../pages/ehub/Profile"

function EHubRoutes() {
  return (
    <EHubLayout>
      <Routes>

        <Route path="dashboard" element={<EHubDashboard />} />
        <Route path="courses" element={<CourseCatalog />} />
        <Route path="community" element={<Community />} />
        <Route path="events" element={<Events />} />
        <Route path="ai" element={<AskAI />} />
        <Route path="profile" element={<Profile />} />

      </Routes>
    </EHubLayout>
  )
}

export default EHubRoutes