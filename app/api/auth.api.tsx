import http from "./http"

export interface LoginPayload {
  email: string
  password: string
}

export interface RegisterPayload {
  name: string
  email: string
  password: string
}

export const loginUser = async (payload: LoginPayload) => {
  const { data } = await http.post("/auth/login", payload)
  return data
}

export const registerUser = async (payload: RegisterPayload) => {
  const { data } = await http.post("/auth/register", payload)
  return data
}

export const getCurrentUser = async () => {
  const { data } = await http.get("/auth/me")
  return data
}

export const logoutUser = async () => {
  const { data } = await http.post("/auth/logout")
  return data
}