// Path: src/pages/public/Welcome.tsx
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../../welcome/logo-light.svg"

export default function Welcome() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home") // redirect to home after 2 seconds
    }, 2000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-900">
      <img src={logo} alt="Infinity Dream Learning Logo" className="w-40 mb-4" />
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
        Welcome to Infinity Dream Learning
      </h1>
      <p className="text-gray-500 dark:text-gray-300 mt-2">Loading homepage...</p>
    </div>
  )
}