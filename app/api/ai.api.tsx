import http from "./http"

export interface AIRequest {
  prompt: string
}

export const askAI = async (payload: AIRequest) => {
  const { data } = await http.post("/ai/ask", payload)
  return data
}

export const getRecommendations = async () => {
  const { data } = await http.get("/ai/recommendations")
  return data
}

export const generateStudyPlan = async () => {
  const { data } = await http.get("/ai/study-plan")
  return data
}