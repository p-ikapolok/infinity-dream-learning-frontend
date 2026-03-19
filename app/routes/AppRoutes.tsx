import { Routes, Route } from "react-router-dom"

import PublicRoutes from "./PublicRoutes"
import EHubRoutes from "./EHubRoutes"
import AthenaRoutes from "./AthenaRoutes"

import ProtectedRoute from "./ProtectedRoute"
import SubscriptionRoute from "./SubscriptionRoute"

function AppRoutes() {
  return (
    <Routes>

      {/* Public */}
      <Route path="/*" element={<PublicRoutes />} />

      {/* Hub (login required) */}
      <Route
        path="/hub/*"
        element={
          <ProtectedRoute>
            <EHubRoutes />
          </ProtectedRoute>
        }
      />

      {/* Learning Portal (login + subscription) */}
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

    </Routes>
  )
}

export default AppRoutes