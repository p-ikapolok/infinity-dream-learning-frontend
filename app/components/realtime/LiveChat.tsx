import { useState } from "react"
import { useSocket } from "../../hooks/useSocket"

function LiveChat() {

  const { messages, sendMessage } = useSocket("ws://localhost:5000")
  const [text, setText] = useState("")

  const send = () => {
    sendMessage({ text })
    setText("")
  }

  return (
    <div>

      <h3>Live Chat</h3>

      {messages.map((m, i) => (
        <p key={i}>{m.text}</p>
      ))}

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={send}>Send</button>

    </div>
  )
}

export default LiveChat