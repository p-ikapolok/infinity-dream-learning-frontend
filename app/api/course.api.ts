// Path: src/api/course.api.ts
import http from "./http"

export const getCourses = async () => {
  const { data } = await http.get("/courses")
  return data
}

export const getCertificates = async () => {
  const { data } = await http.get("/courses/certificates")
  return data
}