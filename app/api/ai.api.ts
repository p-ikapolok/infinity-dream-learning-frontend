// Path: src/api/ai.api.ts
import http from "./http"

export const askAI = async (payload: any) => {
  const { data } = await http.post("/ai/ask", payload)
  return data
}

export const getRecommendations = async (userId: string) => {
  const { data } = await http.get(`/ai/recommend/${userId}`)
  return data
}