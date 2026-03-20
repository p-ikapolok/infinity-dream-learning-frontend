// Path: src/routes/ProtectedRoute.tsx
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/authcontext"

export default function ProtectedRoute({ children }: any) {
  const auth = useContext(AuthContext)

  if (!auth?.user) {
    return <Navigate to="/home" replace />
  }

  return children
}