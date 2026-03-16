import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"

import { AuthProvider } from "./context/AuthContext"
import { SubscriptionProvider } from "./context/SubscriptionContext"
import { NotificationProvider } from "./context/NotificationContext"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SubscriptionProvider>
          <NotificationProvider>
            <AppRoutes />
          </NotificationProvider>
        </SubscriptionProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App