import http from "./http"

export const getCourses = async () => {
  const { data } = await http.get("/courses")
  return data
}

export const getCourse = async (courseId: string) => {
  const { data } = await http.get(`/courses/${courseId}`)
  return data
}

export const enrollCourse = async (courseId: string) => {
  const { data } = await http.post(`/courses/${courseId}/enroll`)
  return data
}