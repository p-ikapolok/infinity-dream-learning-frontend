import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Welcome() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/") // go to homepage route
    }, 2000) // 2 seconds

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <h1 className="text-3xl font-bold">
        Infinity Dream Learning
      </h1>
    </div>
  )
}

export default Welcome