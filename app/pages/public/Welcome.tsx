import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Welcome() {

  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home") // redirect to homepage
    }, 2500) // 2.5 seconds

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="flex items-center justify-center h-screen bg-white dark:bg-[#0F172A]">

      <div className="text-center animate-pulse">

        <h1 className="text-3xl font-bold text-purple-600">
          Infinity Dream Learning
        </h1>

        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Loading...
        </p>

      </div>

    </div>
  )
}

export default Welcome