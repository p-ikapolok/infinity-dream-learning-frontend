// Path: src/api/lesson.api.ts
import http from "./http"

export const getLessons = async () => {
  const { data } = await http.get("/lessons")
  return data
}