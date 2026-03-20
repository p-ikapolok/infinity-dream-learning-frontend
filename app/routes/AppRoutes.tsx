import { Routes, Route } from "react-router-dom"

// Route groups
import PublicRoutes from "./PublicRoutes"
import EHubRoutes from "./EHubRoutes"
import AthenaRoutes from "./AthenaRoutes"

// Route guards
import ProtectedRoute from "./ProtectedRoute"
import SubscriptionRoute from "./SubscriptionRoute"

// Admin pages
import Analytics from "../pages/admin/Analytics"

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/*" element={<PublicRoutes />} />

      {/* EHub: Login required */}
      <Route
        path="/hub/*"
        element={
          <ProtectedRoute>
            <EHubRoutes />
          </ProtectedRoute>
        }
      />

      {/* Learning Platform: Login + Subscription */}
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

      {/* Admin Analytics */}
      <Route path="/admin/analytics" element={<Analytics />} />
    </Routes>
  )
}

export default AppRoutes