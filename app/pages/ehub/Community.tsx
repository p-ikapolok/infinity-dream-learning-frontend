import { useEffect, useState } from "react"

interface Post {
  id: string
  content: string
  author: string
}

export default function Community() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    // fetch community posts here
    setPosts([
      { id: "1", content: "This platform is amazing!", author: "Alice" },
      { id: "2", content: "Just completed my first course!", author: "Bob" },
    ])
  }, [])

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Community Feed</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 border rounded shadow bg-white dark:bg-gray-800">
            <p className="text-gray-700 dark:text-gray-300">{post.content}</p>
            <p className="text-sm text-gray-500 mt-1">— {post.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}