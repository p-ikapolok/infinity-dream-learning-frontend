import http from "./http"

export const getUsers = async () => {
  const { data } = await http.get("/admin/users")
  return data
}

export const getAllCourses = async () => {
  const { data } = await http.get("/admin/courses")
  return data
}

export const deleteUser = async (id: string) => {
  await http.delete(`/admin/users/${id}`)
}