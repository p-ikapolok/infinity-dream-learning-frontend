import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

function ThemeToggle() {

  const { dark, setDark } = useContext(ThemeContext)

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-slate-700"
    >
      {dark ? "Light" : "Dark"}
    </button>
  )
}

export default ThemeToggle