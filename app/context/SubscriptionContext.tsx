import { createContext, useState } from "react"

interface SubscriptionContextType {
  plan: string | null
  setPlan: (plan: string) => void
}

export const SubscriptionContext =
  createContext<SubscriptionContextType | null>(null)

export const SubscriptionProvider = ({ children }: any) => {

  const [plan, setPlanState] = useState<string | null>(null)

  const setPlan = (plan: string) => {
    setPlanState(plan)
  }

  return (
    <SubscriptionContext.Provider value={{ plan, setPlan }}>
      {children}
    </SubscriptionContext.Provider>
  )
}
