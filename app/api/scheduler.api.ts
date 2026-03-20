// Path: src/api/scheduler.api.ts
import http from "./http"

export const getSchedule = async () => {
  const { data } = await http.get("/scheduler")
  return data
}
