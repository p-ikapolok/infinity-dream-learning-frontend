import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

interface Props {
  children: JSX.Element
}

function ProtectedRoute({ children }: Props) {
  const { user } = useAuth()

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute