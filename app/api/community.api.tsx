import http from "./http"

export const getPosts = async () => {
  const { data } = await http.get("/community/posts")
  return data
}

export const createPost = async (content: string) => {
  const { data } = await http.post("/community/posts", { content })
  return data
}

export const getPost = async (postId: string) => {
  const { data } = await http.get(`/community/posts/${postId}`)
  return data
}