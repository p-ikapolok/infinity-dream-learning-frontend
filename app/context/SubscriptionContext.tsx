import { createContext, useState, ReactNode } from "react"

interface SubscriptionContextType {
  subscribed: boolean
  setSubscribed: (val: boolean) => void
}

export const SubscriptionContext = createContext<SubscriptionContextType | null>(null)

export const SubscriptionProvider = ({ children }: { children: ReactNode }) => {
  const [subscribed, setSubscribed] = useState(false)

  return (
    <SubscriptionContext.Provider value={{ subscribed, setSubscribed }}>
      {children}
    </SubscriptionContext.Provider>
  )
}