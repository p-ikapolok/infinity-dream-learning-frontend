import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/logos/logo.png" // replace with your logo path

function Welcome() {
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect to homepage after 3 seconds
    const timer = setTimeout(() => {
      navigate("/")
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-slate-900">
      <img src={logo} alt="Infinity Learning Logo" className="w-40 h-40 mb-6 animate-bounce" />
      <h1 className="text-3xl font-bold text-purple-600 dark:text-purple-400">
        Infinity Learning
      </h1>
      <p className="mt-2 text-gray-500 dark:text-gray-300">Empower your learning journey</p>
    </div>
  )
}

export default Welcome