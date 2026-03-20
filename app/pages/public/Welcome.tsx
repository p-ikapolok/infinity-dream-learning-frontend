import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Welcome() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home") // THIS MUST MATCH YOUR ROUTE
    }, 2000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <h1 className="text-3xl font-bold">
        Infinity Dream Learning
      </h1>
      <p>Loading...</p>
    </div>
  )
}

export default Welcome