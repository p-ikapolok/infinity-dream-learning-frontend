import { Routes, Route } from "react-router-dom"

import PublicRoutes from "./PublicRoutes"
import EHubRoutes from "./EHubRoutes"
import AthenaRoutes from "./AthenaRoutes"

function AppRoutes() {
  return (
    <Routes>

      <Route path="/*" element={<PublicRoutes />} />

      <Route path="/hub/*" element={<EHubRoutes />} />

      <Route path="/learn/*" element={<AthenaRoutes />} />

    </Routes>
  )
}

export default AppRoutes