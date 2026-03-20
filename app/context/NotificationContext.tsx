import { createContext, useState, ReactNode } from "react"

interface Notification {
  id: string
  message: string
}

interface NotificationContextType {
  notifications: Notification[]
  addNotification: (message: string) => void
  removeNotification: (id: string) => void
}

export const NotificationContext = createContext<NotificationContextType | null>(null)

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const addNotification = (message: string) => {
    const id = Date.now().toString()
    setNotifications([...notifications, { id, message }])
  }

  const removeNotification = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
    </NotificationContext.Provider>
  )
}