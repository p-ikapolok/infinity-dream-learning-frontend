import { useEffect, useState } from "react"
import { getPosts, createPost } from "../../api/community.api"
import CommunityCard from "../../components/cards/CommunityCard"

function Community() {

  const [posts, setPosts] = useState<any[]>([])
  const [content, setContent] = useState("")

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    const data = await getPosts()
    setPosts(data)
  }

  const submitPost = async () => {

    if (!content) return

    await createPost(content)

    setContent("")

    loadPosts()
  }

  return (
    <div>

      <h2>Community</h2>

      <div>

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share something..."
        />

        <button onClick={submitPost}>
          Post
        </button>

      </div>

      <div>

        {posts.map((post) => (
          <CommunityCard key={post.id} />
        ))}

      </div>

    </div>
  )
}

export default Community
