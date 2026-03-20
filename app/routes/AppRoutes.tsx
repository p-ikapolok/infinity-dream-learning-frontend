// Path: src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom"

import PublicRoutes from "./PublicRoutes"
import EHubRoutes from "./EHubRoutes"
import AthenaRoutes from "./AthenaRoutes"

import ProtectedRoute from "./ProtectedRoute"
import SubscriptionRoute from "./SubscriptionRoute"
import Analytics from "../pages/admin/Analytics"

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/*" element={<PublicRoutes />} />

      {/* EHub (requires login) */}
      <Route
        path="/hub/*"
        element={
          <ProtectedRoute>
            <EHubRoutes />
          </ProtectedRoute>
        }
      />

      {/* Athena (requires login + subscription) */}
      <Route
        path="/learn/*"
        element={
          <ProtectedRoute>
            <SubscriptionRoute>
              <AthenaRoutes />
            </SubscriptionRoute>
          </ProtectedRoute>
        }
      />

      {/* Admin */}
      <Route path="/admin/analytics" element={<Analytics />} />
    </Routes>
  )
}