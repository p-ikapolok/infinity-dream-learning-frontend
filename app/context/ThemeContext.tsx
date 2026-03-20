import { createContext, useState, useEffect, ReactNode } from "react"

type ThemeContextType = {
  dark: boolean
  setDark: (value: boolean) => void
}

export const ThemeContext = createContext<ThemeContextType>({
  dark: false,
  setDark: () => {}
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {

  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [dark])

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  )
}