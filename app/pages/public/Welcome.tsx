import { useEffect } from "react"

export default function Welcome() {

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/home" // force redirect
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

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