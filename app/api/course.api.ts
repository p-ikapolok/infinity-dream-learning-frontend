import http from "./http"

export const getCourses = async () => {
  const { data } = await http.get("/courses")
  return data
}

export const getCourseById = async (id: string) => {
  const { data } = await http.get(`/courses/${id}`)
  return data
}

export const enrollCourse = async (courseId: string) => {
  const { data } = await http.post(`/courses/${courseId}/enroll`)
  return data
}

export const getMyCourses = async () => {
  const { data } = await http.get("/courses/my")
  return data
}