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

export const generateQuiz = async (lessonId: string) => {
  const { data } = await http.get(`/ai/quiz/${lessonId}`)
  return data
}

export const submitQuiz = async (answers: any) => {
  const { data } = await http.post("/ai/quiz/submit", answers)
  return data
}

export const askAI = async (payload: any) => {
  const { data } = await http.post("/ai/ask", payload)
  return data
}
