// Path: src/components/ui/ThemeToggle.tsx
import { useContext } from "react"
import { ThemeContext } from "../../context/themecontext"

export default function ThemeToggle() {
  const theme = useContext(ThemeContext)

  if (!theme) return null

  return (
    <button
      onClick={() => theme.setDark(!theme.dark)}
      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
    >
      {theme.dark ? "Light" : "Dark"}
    </button>
  )
}