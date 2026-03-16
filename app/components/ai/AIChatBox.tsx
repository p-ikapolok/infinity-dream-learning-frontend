import { useState } from "react"

function AIChatBox() {

  const [question, setQuestion] = useState("")
  const [messages, setMessages] = useState<string[]>([])

  const askAI = () => {

    if (!question) return

    setMessages([...messages, "You: " + question])

    setQuestion("")
  }

  return (
    <div className="ai-chat">

      <div className="messages">

        {messages.map((msg, i) => (
          <p key={i}>{msg}</p>
        ))}

      </div>

      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask AI..."
      />

      <button onClick={askAI}>
        Send
      </button>

    </div>
  )
}

export default AIChatBox