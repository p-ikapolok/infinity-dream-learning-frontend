import { createContext, useState, useEffect, ReactNode } from "react"

interface ThemeContextType {
  dark: boolean
  setDark: (val: boolean) => void
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.body.className = dark ? "dark" : ""
  }, [dark])

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  )
}