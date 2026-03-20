import http from "./http"

export const getAnalytics = async () => {
  const { data } = await http.get("/admin/analytics")
  return data
}