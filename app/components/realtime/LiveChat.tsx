import { useState } from "react"
import { useSocket } from "../../hooks/useSocket"

export default function LiveChat() {
  const { messages, sendMessage } = useSocket("ws://localhost:5000")
  const [text, setText] = useState("")

  const handleSend = () => {
    if (text.trim() === "") return
    sendMessage({ text })
    setText("")
  }

  return (
    <div className="fixed bottom-4 right-4 w-80 p-4 bg-white dark:bg-gray-800 rounded shadow">
      <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Live Chat</h4>
      <div className="h-40 overflow-y-auto mb-2 border p-2 rounded bg-gray-50 dark:bg-gray-700">
        {messages.map((m, i) => (
          <p key={i} className="text-gray-700 dark:text-gray-300">{m.text}</p>
        ))}
      </div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        className="w-full p-2 border rounded mb-2 dark:bg-gray-700 dark:text-white"
      />
      <button
        onClick={handleSend}
        className="w-full py-2 bg-purple-700 text-white rounded hover:bg-purple-800"
      >
        Send
      </button>
    </div>
  )
}