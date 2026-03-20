// Path: src/routes/SubscriptionRoute.tsx
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { SubscriptionContext } from "../context/subscriptioncontext"

export default function SubscriptionRoute({ children }: any) {
  const sub = useContext(SubscriptionContext)

  if (!sub?.subscribed) {
    return <Navigate to="/pricing" replace />
  }

  return children
}import { Navigate } from "react-router-dom"
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