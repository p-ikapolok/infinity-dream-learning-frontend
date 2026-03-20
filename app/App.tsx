import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import { AuthProvider } from "./context/AuthContext"
import { SubscriptionProvider } from "./context/SubscriptionContext"
import { NotificationProvider } from "./context/NotificationContext"
import { ThemeProvider } from "./context/ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <SubscriptionProvider>
            <NotificationProvider>
              <AppRoutes />
            </NotificationProvider>
          </SubscriptionProvider>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App