import http from "./http"

export const getLessons = async (courseId: string) => {
  const { data } = await http.get(`/courses/${courseId}/lessons`)
  return data
}

export const getLesson = async (lessonId: string) => {
  const { data } = await http.get(`/lessons/${lessonId}`)
  return data
}

export const completeLesson = async (lessonId: string) => {
  const { data } = await http.post(`/lessons/${lessonId}/complete`)
  return data
}
