import { Navigate } from "react-router-dom"
import { useSubscription } from "../hooks/useSubscription"

interface Props {
  children: JSX.Element
}

function SubscriptionRoute({ children }: Props) {

  const { plan } = useSubscription()

  if (!plan) {
    return <Navigate to="/pricing" replace />
  }

  return children
}

export default SubscriptionRoute