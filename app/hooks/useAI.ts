import { useState } from "react"
import { askAI } from "../api/ai.api"

export const useAI = () => {

  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState<string | null>(null)

  const sendPrompt = async (prompt: string) => {

    setLoading(true)

    try {
      const data = await askAI({ prompt })

      setResponse(data.answer)
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    response,
    sendPrompt
  }
    }
