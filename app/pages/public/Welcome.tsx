import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/logos/logo-light.svg"

export default function Welcome() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate("/"), 2000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="flex items-center justify-center h-screen bg-white dark:bg-gray-900">
      <img src={logo} alt="Infinity Dream Learning" className="w-40 h-40" />
    </div>
  )
}